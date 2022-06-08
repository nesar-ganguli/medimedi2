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

app.post("/customerSignup", async function(req,res){
    const Name = req.body.Name;
    let Message ="";
    
    
    con.query(`SELECT Username FROM CustomerCred WHERE username = '${Name}'`, async function(err, result, field){
        if(result.length === 0){
            console.log("Does not exist");
            const Email = req.body.Email;
            const Password = req.body.Password;
            const Aadhar_no = req.body.Aadhar;
            const Contact = req.body.Contact;
            con.query(`INSERT INTO CustomerCred (Username, Email, Password, Aadhar_no, Contact)
            VALUES ("${Name}","${Email}","${Password}",${Aadhar_no},${Contact});`, async function(error, res){
                if(error){
                     console.log(error)
                    
                }
                else{
                    Message="Created";
                    console.log("Createddddddd");
                    
                }
            })
            
        } else {  
            console.log("This user exists"); 
            Message="Not Created";
            
        }
        res.send({Name:Name,Msg:Message});
    })
    
})

app.post("/customerLogin", async function(req,res){
    const Name = req.body.Name;
    const Password = req.body.Password;
    console.log(Name)
    let Message ="";
    
    
    con.query(`SELECT Username,Password FROM CustomerCred WHERE username = '${Name}'`, async function(err, result, field){
        if(result.length === 0){
            console.log("Does not exist");
            
        } else {  
            console.log("This user exists"); 
            console.log(result)
            console.log(result[0].Username);
            console.log(result[0].Password);
            const user = result[0].Username;
            const pwd = result[0].Password;
            if((Name===user)&&(Password===pwd))
            {
                Message="Authenticated";
            }
            else{
                Message="Not Authenticated";
            }
        }
        console.log(Message)
        res.send({Name:Name,Msg:Message});
    })
    
})
