var mysql = require('mysql');

var db = mysql.createConnection({
  host:     '127.0.0.1',
  user:     'root',
  password: 'root',
  database: 'timetrack'
});

db.query(
  "select * from hour",
  function(err, data) { 
    if (err) throw err;
    console.log(data);
  }
);

db.end();