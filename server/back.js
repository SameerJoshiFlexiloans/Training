const express = require('express');
const app = express();

app.use(express.static('../'));

app.get('/',(req,res)=>{
    //res.sendFile('index.html',{root:'../'});
});

app.listen(1337,()=>{
    console.log('listening to port 1337');
})