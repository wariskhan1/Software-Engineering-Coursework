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

app.get('/country', function(req,res){
  var countriesList = [];

  // Define SQL query
  db.query("SELECT * FROM country_report_2", function(err, rows, fields) {
    if (err) {
      res.status(500).json({"status_code": 500,"status_message": "internal server error", "message": err});
    }
    else {
      // Loop check on each row
      for (var i = 0; i < rows.length; i++) {
        // Create an object to save current row's data
        var country = {
          'Name':rows[i].Name,
          'Code':rows[i].Code,
          'Continent':rows[i].Continent,
          'Population':rows[i].Population,
          'Region':rows[i].Region,
          'Capital':rows[i].Capital
        }
        // Add object into array
        countriesList.push(country);
      }
    // Render languages_page.pug page using array
    res.render('countrypage', {"countriesList":countriesList});
    }
  });
});

app.listen(3003, function(err){
  if(err) throw err;
  console.log("Running on port 3003");
  console.log("You can access the webpage using http://localhost:3003/country")
});
