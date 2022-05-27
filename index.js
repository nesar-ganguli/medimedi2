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

app.post("/customerSignup", function(req,res){
    console.log(req.body.Name);
    console.log(req.body.Email);
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Aadhar_no = req.body.Aadhar;
    const Contact = req.body.Contact;
    con.query(`INSERT INTO CustomerCred (Username, Email, Password, Aadhar_no, Contact)
    VALUES ("${Name}","${Email}","${Password}",${Aadhar_no},${Contact});`, function(error, res){
        if(error) console.log(error);
        else{
            console.log("Createddddddd")
        }
    })

})
