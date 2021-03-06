var orm = require('orm');
// var orm = require('../../../../');
var settings = require('../config/settings');

var connection = null;

function setup(db, cb) {
  require('./user')(orm, db);
  require('./hour')(orm, db);
  require('./item')(orm, db);

  return cb(null, db);
}

module.exports = function(cb) {
  if (connection) return cb(null, connection);

  orm.connect(settings.database, function(err, db) {
    if (err) return cb(err);

    connection = db;
    db.settings.set('instance.returnAllErrors', true);
    // Without this setting, orm will not get the new data if I use 'update' to change any data in db.
    db.settings.set('instance.cache', false);
    setup(db, cb);
  });
};