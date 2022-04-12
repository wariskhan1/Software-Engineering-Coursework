var express = require("express");
var mysql = require("mysql");

var app = express();

// Create connections
function DBConnection(){
    return mysql.createConnection({
        host    : 'localhost',
        user    : "root",
        password: "foobar",
        database: 'world'
    });
}

// Use pug as templating engine
app.set('view engine', 'pug');

app.get('/index', function(req,res){
    var countrycityList = [];

    // Connect to database
    var connection = DBConnection();
    connection.connect();

    connection.query('SELECT countrycity, Percentage FROM most_popular_countrycity',function(err, rows, fields){
        if (err){
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
        } else{
            for (var i = 0; i < rows.length; i++){
                var countrycity = {
                    'countrycity':rows[i].countrycity,
                    'percentage':rows[i].percentage
                }
                countrycity.push(countrycity)
            }
            res.render('index', {"countrycity": countrycity});
        }
    });
    connection.end();
});

// Listen on port 8080
app.listen(8080, function () {
    console.log('listening on port', 8080);
});

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
app.set('reportdata', 'pug');

// Connect to database
db.connect(function(err){
  if(err){
    return console.error('Error: ' + err.message);
  }
  console.log('Database connected.');
});

app.get('/countrycity', function(req,res){
  res.send("Hello");
  let sql = "CREATE DATABASE testNode";
  db.query(sql,function(err,results,fields){
    if(err) throw err;
    res.send("New Database is Created");
  })
});

app.listen(3001, function(err){
  if(err) throw err;
  console.log("Running on port 3000");
  console.log("You can access using http://localhost:3000/countrycity")
});





const bodyParser = require('body-parser');
const cors = require('cors')
const res = require('express/lib/response');
//const app = express();
//const mysql = require('mysql')

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res) => {


const name = req.body.name
const pop = req.body.pop
const ccity = req.body.ccity
const cc = req.body.cc

 const sqlInsert = 
 "INSERT INTO city (Name, CountryCode, Population, District) VALUES (?,?)"
 db.query(sqlInsert, [Name, Population, CountryCode, District], (err,result)=> {
     console.log(result);
  })
});
    
app.listen(3001, () => {
   console.log("running on port 3001");
});