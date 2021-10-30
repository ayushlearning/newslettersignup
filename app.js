const express = require("express");
const app= express();
//const request=require("request");
app.use(express.static("public"));

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile (__dirname+"/signup.html");

});

app.post("/",function(req,res){
var firstName=  req.body.firstName;
var lastName=  req.body.lastName;
var email=  req.body.mail;
console.log(firstName,lastName,email);
});



app.listen(3000,function(){
  console.log("app running at port 3000")
});









//7d37565b0ed3ff4d3fff3e8e553a6b43-us1
