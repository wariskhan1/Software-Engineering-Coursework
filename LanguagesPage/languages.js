var express = require('express');
var mysql = require('mysql');
var app = express();

var pug = require('pug');

app.set('views', './views');
app.set('view engine', 'pug');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'BKobak',
    password: 'foobar',
    database: 'world',
    port: 3306
});


app.get('/languages', function(req,res){
  res.render('languages_page');


  var languagesList = [];

  db.query('SELECT Language, Percentage FROM countrylanguage', function(err, rows, fields) {
    if (err) {
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    } else {
      // Loop check on each row
      for (var i = 0; i < rows.length; i++) {

        // Create an object to save current row's data
        var language = {
          'Language':rows[i].Language,
          'Percentage':rows[i].Percentage,
        }
        // Add object into array
        languagesList.push(language);
    }

    // Render index.pug page using array 
    res.render('languages', {"languagesList":languagesList});
    }
});

  
});

app.listen(3000, function(err){
  if(err) throw err;
  console.log("Running on port 3000");
  console.log("You can access the webpage using http://localhost:3000/languages")
});
