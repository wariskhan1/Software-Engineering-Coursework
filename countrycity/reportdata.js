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
  var reportdataLis = [];

  // Define SQL query
  db.query("SELECT name, population from country order by population desc;", function(err, rows, fields) {
    if (err) {
      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
    }
    else {
      // Loop check on each row
      for (var i = 0; i < rows.length; i++) {

        // Create an object to save current row's data
        var reportdata = {
          'reportdata':rows[i].reportdata
        }
        // Add object into array
        reportdataList
  .push(reportdata);
    }
    // Render reportdatas_page.pug page using array
    res.render('reportdata', {"reportdataList":reportdataLis});
    }
  });  
});


 
let sql = "SELECT name, population from country order by population desc;";
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});


app.listen(3000, function(err){
  if(err) throw err;
  console.log("Running on port 3000");
  console.log("You can access the webpage using http://localhost:3000/reportdata")
});
