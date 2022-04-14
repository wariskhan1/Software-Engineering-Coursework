var express = require('express');
var mysql = require('mysql');
const { RR } = require('mysql/lib/PoolSelector');
var app = express();


var db = mysql.createConnection({
    host: 'localhost',
    user: 'BKobak',
    password: 'foobar',
    database: 'world',
    port: 3306
});


// Connect to database
db.connect(function(err){
  if(err){
    return console.error('Error: ' + err.message);
  }
  console.log('Database connected.');
});

app.get('/languages', function(req,res){
  res.send("Working...");
  /*
  db.connect(function(err){
    if(err) throw err;
    db.query("SELECT * FROM most_popular_languages", function(err,result,fields){
      if(err) throw err;
      console.log(result);
    });
  });
  */
});

app.listen(3000, function(err){
  if(err) throw err;
  console.log("Running on port 3000");
  console.log("You can access the webpage using http://localhost:3000/languages")
});
