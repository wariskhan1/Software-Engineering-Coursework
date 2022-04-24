var express = require('express');
var mysql = require('mysql2');
var app = express();

var pug = require('pug');

app.set('views', './views');
app.set('view engine', 'pug');

// Create connection to database
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'foobar',
    database: 'world',
    port: 3306
});

app.get('/languages', function(req,res){
  var languagesList = [];

  // Define SQL query
  db.query("SELECT cl.Language, cl.Percentage, c.Name as 'Country' FROM countrylanguage cl, country c WHERE c.Code = cl.CountryCode", function(err, rows, fields) {
    if (err) {
      res.status(500).json({"status_code": 500,"status_message": "internal server error", "message": err});
    }
    else {
      // Loop check on each row
      for (var i = 0; i < rows.length; i++) {
        // Create an object to save current row's data
        var language = {
          'Language':rows[i].Language,
          'Percentage':rows[i].Percentage,
          'Country':rows[i].Country,
        }
        // Add object into array
        languagesList.push(language);
      }
    // Render languages_page.pug page using array
    res.render('languages_page', {"languagesList":languagesList});
    }
  });
  /*
  db.query("SELECT Language, ROUND(SUM(country.Population * Percentage)/100) AS 'Number of people' FROM countrylanguage INNER JOIN country ON countrylanguage.`CountryCode` = country.Code GROUP BY countrylanguage.Language ORDER BY ROUND(SUM(country.Population * Percentage)/100) DESC;", function(err, rows, fields) {
    if (err) {
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    }
    else {
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
    // Render languages_page.pug page using array
    res.render('languages_page', {"languagesList":languagesList});
    }
  });
  */
});

app.listen(3000, function(err){
  if(err) throw err;
  console.log("Running on port 3000");
  console.log("You can access the webpage using http://localhost:3000/languages")
});
