'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'sql10.freemysqlhosting.net',
  user     : 'sql10403577',
  password : 'DrqsGgdLRV',
  database : 'sql10403577'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;