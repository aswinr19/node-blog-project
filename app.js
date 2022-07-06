const express = require(express);

const app = use(express);

app.set('view engine','ejs');

app.listen(3000);

app.get('/',(req,res)=>{
    res.render('index',{title:'Home'});
});

app.use(()=>{
    res.render('404',{title:'404'});
});