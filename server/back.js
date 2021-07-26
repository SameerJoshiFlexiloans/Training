const express = require('express');
const bodyParser = require("body-parser");
const { addUser, deleteUser, updateUser } = require('./util');
const app = express();

app.use(express.static('../'));
app.use(bodyParser());

app.post("/add",(req,res)=>{
    addUser(req.body).then(data=>res.sendFile("index.html",{root:"../"})).catch(err=>console.log(err));
});

app.post("/delete",(req,res)=>{
    deleteUser(req.body).then(data=>res.sendFile("index.html",{root:"../"})).catch(err=>console.log(err));
});

app.post("/update",(req,res)=>{
    updateUser(req.body).then(data=>res.sendFile("index.html",{root:"../"})).catch(err=>console.log(err));
});

app.listen(1337,()=>{
    console.log('listening to port 1337');
});

