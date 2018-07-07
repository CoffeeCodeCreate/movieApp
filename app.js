/**
 * Links used for reference:
 * https://www.omdbapi.com/
 * http://www.omdbapi.com/?apikey=thewdb&i=tt0080684
 * 
 */

//API KEY: &apikey=thewdb
var request = require('request');
var express = require('express');
var app = express();

//parses the body of the request, pushes it to the variable req.body;
var bodyParser = require("body-parser");

//tells express to use body-parser and url encode the body of the request
app.use(bodyParser.urlencoded({extended: true}));

//Tells express to expect .ejs files by default when rendering
app.set("view engine", "ejs");

//All assets are located in the public folder.
app.use(express.static("public"));

app.get("/",function(req, res){
    res.render("search");
});

app.get("/results", function(req,res){
    //Get the data from the post request body
    //The final value is the 'name' we gave the input
    //in this case its 'search'
    var query = req.query.search
    
    //The URL of the search query
    var url = "http://www.omdbapi.com/?apikey=thewdb&t=" + query;
    request(url, function(err,response,body){
        //if there is no error and the status code is 200: 'ok'
        if(!err && response.statusCode == 200)
        {
            //parses the body into a JSON format
            var data = JSON.parse(body)
            res.render("results", {data: data});
        }
    });
});

app.listen(3000,function(){
    console.log("Server Running....");
});