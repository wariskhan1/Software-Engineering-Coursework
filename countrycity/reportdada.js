var express = require('express');
var mysql = require('mysql');
const Connection = require('mysql/lib/Connection');
var app = express();

var pug = require('pug');

app.set('views', './views');
app.set('view engine', 'pug');

// Create connection to database
var db = mysql.createConnection({
    host: 'localhost',
    user: 'BKobak',
    password: 'foobar',
    database: 'world',
    port: 3306
});

app.get('/reportdata', function(req,res){
  var languagesList = [];

  // Define SQL query
  db.query("SELECT Language, ROUND(SUM(country.Population * Percentage)/100) AS 'Number of people' FROM countrylanguage INNER JOIN country ON countrylanguage.`CountryCode` = country.Code GROUP BY countrylanguage.Language ORDER BY ROUND(SUM(country.Population * Percentage)/100) DESC;", function(err, rows, fields) {
    if (err) {
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    }
    else {
      // Loop check on each row
      for (var i = 0; i < rows.length; i++) {

        // Create an object to save current row's data
        var language = {
          'Language':rows[i].countrycity,
          'Percentage':rows[i].Percentage,
        }
        // Add object into array
        countrycityList.push(countrycity);
    }
    // Render languages_page.pug page using array
    res.render('countrycity_page', {"countrycityList":countrycityList});
    }
  });  
});

app.listen(3000, function(err){
  if(err) throw err;
  console.log("Running on port 3000");
  console.log("You can access the webpage using http://localhost:3000/countrycity")
});
