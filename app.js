var express = require("express");
var mysql = require("mysql");

var app = express();

// Create connections
function DBConnection(){
    return mysql.createConnection({
        host    : 'localhost',
        user    : "SE",
        password: "soft_eng_csw",
        database: 'world'
    });
}

// Use pug as templating engine
app.set('view engine', 'pug');

app.get('/index', function(req,res){
    var languagesList = [];

    // Connect to database
    var connection = DBConnection();
    connection.connect();

    connection.query('SELECT Language, Percentage FROM most_popular_languages',function(err, rows, fields){
        if (err){
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
        } else{
            for (var i = 0; i < rows.length; i++){
                var languages = {
                    'language':rows[i].language,
                    'percentage':rows[i].percentage
                }
                languagesList.push(languages)
            }
            res.render('index', {"languagesList": languagesList});
        }
    });
    connection.end();
});

// Listen on port 8080
app.listen(8080, function () {
    console.log('listening on port', 8080);
});