const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const res = require('express/lib/response');
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'foobar',
    database: 'world',
});

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
