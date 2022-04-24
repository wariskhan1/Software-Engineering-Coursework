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

app.get('/countrycity', function(req,res){
  var citiesList = [];

  // Define SQL query
  db.query("SELECT * FROM city_report", function(err, rows, fields) {
    if (err) {
      res.status(500).json({"status_code": 500,"status_message": "internal server error", "message": err});
    }
    else {
      // Loop check on each row
      for (var i = 0; i < rows.length; i++) {
        // Create an object to save current row's data
        var city = {
          'Name':rows[i].Name,
          'District':rows[i].District,
          'Population':rows[i].Population,
          'Country':rows[i].Country,
        }
        // Add object into array
        citiesList.push(city);
      }
    // Render languages_page.pug page using array
    res.render('countrycity', {"citiesList":citiesList});
    }
  });
});

app.listen(3002, function(err){
  if(err) throw err;
  console.log("Running on port 3002");
  console.log("You can access the webpage using http://localhost:3002/countrycity")
});
