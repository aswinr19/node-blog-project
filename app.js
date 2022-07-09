const express = require("express");

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.listen(3000);

app.get('/',(req,res)=>{
    res.render('index',{title:'Home'});
});

app.get('/blogs',(req,res)=>{
    res.render('blogs/index',{title:'Blogs'});
});

app.get('/blogs/create-blog',(req,res)=>{
    res.render('blogs/create',{title:'Create Blog'});
});

app.post('/blogs/create-blog',(req,res)=>{
});

app.get('/blogs/update-blog',(req,res)=>{
    res.render('blogs/update',{title:'Update Blog'});
});

app.post('/blogs/update-blog',(req,res)=>{
   
});

app.get('/blogs/show/:id',(req,res)=>{
    res.render('blogs/show',{title:'Show Blog'});
});


app.use((req,res)=>{
    res.staus(404).render('404',{title:'404'});
});