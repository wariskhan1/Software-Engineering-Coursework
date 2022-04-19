var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./database');
 
var app = express();


var createError = require('http-errors');
var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./database');
 
var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, '/'));
app.set('view engine', 'ejs');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
 
app.get('/countries-list', function(req, res) {
    db.query('SELECT * FROM countries ORDER BY id desc', function(err, rows) {
 
        if (err) {
            res.json({
                msg: 'error'
            });
        } else {
            res.json({
                msg: 'success',
                countries: rows
            });
        }
    });
});
 
app.post('/get-states-by-country', function(req, res) {
 
 
    db.query('SELECT * FROM states WHERE country_id = "' + req.body.country_id + '"',
        function(err, rows, fields) {
 
            if (err) {
                res.json({
                    msg: 'error'
                });
            } else {
                res.json({
                    msg: 'success',
                    states: rows
                });
            }
 
        });
});
 
app.post('/get-cities-by-state', function(req, res) {
 
 
    db.query('SELECT * FROM cities WHERE state_id = "' + req.body.state_id + '"',
        function(err, rows, fields) {
 
            if (err) {
                res.json({
                    msg: 'error'
                });
            } else {
                res.json({
                    msg: 'success',
                    cities: rows
                });
            }
 
        });
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(3000, function() {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;