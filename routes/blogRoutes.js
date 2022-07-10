const express = require('express');

const router = express.Router();



router.get('/blogs',(req,res)=>{
    res.render('blogs/index',{title:'Blogs'});
});

router.get('/blogs/create-blog',(req,res)=>{
    res.render('blogs/create',{title:'Create Blog'});
});

router.post('/blogs/create-blog',(req,res)=>{
});

router.get('/blogs/update-blog',(req,res)=>{
    res.render('blogs/update',{title:'Update Blog'});
});

router.post('/blogs/update-blog',(req,res)=>{
   
});

router.get('/blogs/show/:id',(req,res)=>{
    res.render('blogs/show',{title:'Show Blog'});
});

module.exports = router;