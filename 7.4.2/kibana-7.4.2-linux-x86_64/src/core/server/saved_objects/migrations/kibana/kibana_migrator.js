"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KibanaMigrator = void 0;

var _lodash = require("lodash");

var _schema = require("../../schema");

var _serialization = require("../../serialization");

var _validation = require("../../validation");

var _core = require("../core");

var _document_migrator = require("../core/document_migrator");

var _build_index_map = require("../core/build_index_map");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Manages the shape of mappings and documents in the Kibana index.
 *
 * @export
 * @class KibanaMigrator
 */
class KibanaMigrator {
  /**
   * Migrates the mappings and documents in the Kibana index. This will run only
   * once and subsequent calls will return the result of the original call.
   *
   * @returns
   * @memberof KibanaMigrator
   */

  /**
   * Creates an instance of KibanaMigrator.
   *
   * @param opts
   * @prop {KbnServer} kbnServer - An instance of the Kibana server object.
   * @memberof KibanaMigrator
   */
  constructor({
    kbnServer
  }) {
    _defineProperty(this, "awaitMigration", (0, _lodash.once)(async () => {
      const {
        server
      } = this.kbnServer; // Wait until the plugins have been found an initialized...

      await this.kbnServer.ready(); // We can't do anything if the elasticsearch plugin has been disabled.

      if (!server.plugins.elasticsearch) {
        server.log(['warning', 'migration'], 'The elasticsearch plugin is disabled. Skipping migrations.');
        return Object.keys(this.mappingProperties).map(() => ({
          status: 'skipped'
        }));
      } // Wait until elasticsearch is green...


      await server.plugins.elasticsearch.waitUntilReady();
      const config = server.config();
      const kibanaIndexName = config.get('kibana.index');
      const indexMap = (0, _build_index_map.createIndexMap)({
        config,
        kibanaIndexName,
        indexMap: this.mappingProperties,
        schema: this.schema
      });
      const migrators = Object.keys(indexMap).map(index => {
        return new _core.IndexMigrator({
          batchSize: config.get('migrations.batchSize'),
          callCluster: server.plugins.elasticsearch.getCluster('admin').callWithInternalUser,
          documentMigrator: this.documentMigrator,
          index,
          log: this.log,
          mappingProperties: indexMap[index].typeMappings,
          pollInterval: config.get('migrations.pollInterval'),
          scrollDuration: config.get('migrations.scrollDuration'),
          serializer: this.serializer,
          // Only necessary for the migrator of the kibana index.
          obsoleteIndexTemplatePattern: index === kibanaIndexName ? 'kibana_index_template*' : undefined,
          convertToAliasScript: indexMap[index].script
        });
      });

      if (migrators.length === 0) {
        throw new Error(`Migrations failed to run, no mappings found or Kibana is not "ready".`);
      }

      return Promise.all(migrators.map(migrator => migrator.migrate()));
    }));

    _defineProperty(this, "kbnServer", void 0);

    _defineProperty(this, "documentMigrator", void 0);

    _defineProperty(this, "mappingProperties", void 0);

    _defineProperty(this, "log", void 0);

    _defineProperty(this, "serializer", void 0);

    _defineProperty(this, "schema", void 0);

    this.kbnServer = kbnServer;
    this.schema = new _schema.SavedObjectsSchema(kbnServer.uiExports.savedObjectSchemas);
    this.serializer = new _serialization.SavedObjectsSerializer(this.schema);
    this.mappingProperties = mergeProperties(kbnServer.uiExports.savedObjectMappings || []);

    this.log = (meta, message) => kbnServer.server.log(meta, message);

    this.documentMigrator = new _document_migrator.DocumentMigrator({
      kibanaVersion: kbnServer.version,
      migrations: kbnServer.uiExports.savedObjectMigrations || {},
      validateDoc: (0, _validation.docValidator)(kbnServer.uiExports.savedObjectValidations || {}),
      log: this.log
    });
  }
  /**
   * Gets all the index mappings defined by Kibana's enabled plugins.
   *
   * @returns
   * @memberof KibanaMigrator
   */


  getActiveMappings() {
    return (0, _core.buildActiveMappings)({
      properties: this.mappingProperties
    });
  }
  /**
   * Migrates an individual doc to the latest version, as defined by the plugin migrations.
   *
   * @param {RawSavedObjectDoc} doc
   * @returns {RawSavedObjectDoc}
   * @memberof KibanaMigrator
   */


  migrateDocument(doc) {
    return this.documentMigrator.migrate(doc);
  }

}
/**
 * Merges savedObjectMappings properties into a single object, verifying that
 * no mappings are redefined.
 */


exports.KibanaMigrator = KibanaMigrator;

function mergeProperties(mappings) {
  return mappings.reduce((acc, {
    pluginId,
    properties
  }) => {
    const duplicate = Object.keys(properties).find(k => acc.hasOwnProperty(k));

    if (duplicate) {
      throw new Error(`Plugin ${pluginId} is attempting to redefine mapping "${duplicate}".`);
    }

    return Object.assign(acc, properties);
  }, {});
}