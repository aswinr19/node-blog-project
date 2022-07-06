const express = require("express");

const app = express();

app.set('view engine','ejs');

app.listen(3000);

app.get('/',(req,res)=>{
    res.render('index',{title:'Home'});
});

app.use((req,res)=>{
    res.render('404',{title:'404'});
});