var express = require('express');
var routes = require('./index.js');
var mysql = require('mysql');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

var dbcon = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mydb",
    multipleStatements: true
});

/* Routing of links */
routes(app, dbcon);

/* Application is bound to port 3000 */
app.listen(3000, function() {
    console.log('Server is bound to port 3000')
});