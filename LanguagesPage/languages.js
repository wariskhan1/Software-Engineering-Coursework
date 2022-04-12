var express = require('express');
var mysql = require('mysql');
var app = express();

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'foobar',
    database: 'world',
    port: 8081
});

// Use pug as templating engine
app.set('view engine', 'pug');

// Connect to database
db.connect(function(err){
  if(err){
    return console.error('Error: ' + err.message);
  }
  console.log('Database connected.');
});

app.get('/languages', function(req,res){
  res.send("Hello");
  let sql = "CREATE DATABASE testNode";
  db.query(sql,function(err,results,fields){
    if(err) throw err;
    res.send("New Database is Created");
  })
});

app.listen(3000, function(err){
  if(err) throw err;
  console.log("Running on port 3000");
  console.log("You can access the webpage using http://localhost:3000/languages")
});
