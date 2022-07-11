const express = require("express");

const app = express();

const blogRoutes = require('./routes/blogRoutes');



//setting up view engine
app.set('view engine','ejs');

//using static middleware to acces static files
app.use(express.static('public'));

//listening to port 3000
app.listen(3000);


//routes
app.get('/', (req,res)=>{
    res.render('index',{title:'Home'});
});

app.get('/signin',(req,res)=>{
    res.render('signin',{title:'Signin'});
});

app.post('/signin',(req,res)=>{
  
});

app.get('/signup',(req,res)=>{
    res.render('signup',{title:'Signup'});
});

app.post('/signup',(req,res)=>{
   
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'About Us'});
});

//blog routes
app.use(blogRoutes);

//middleware to send 404
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});