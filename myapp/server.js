const express = require("express")
const app = express()

app.set("view engine", "pug")

app.get("/", (req, res) => { 
    console.log("Here")
    res.render("index")
})

app.listen(8080)