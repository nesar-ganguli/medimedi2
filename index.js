var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host:'localhost',
    port:'8898',
    user:'root',
    password:'root',
    database:'medifind',
});

var server = app.listen(4545, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("start");
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
})


app.get("/users", function(req,res){
    con.query("select * from user", function(error, rows, fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
});
}); 
