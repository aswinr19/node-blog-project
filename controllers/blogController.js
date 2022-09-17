const Blog = require("../models/blog");

const blogIndex = (req,res)=>{
    res.render('blogs/index',{title:'Blogs'});
}

const blogCreateGet = (req,res)=>{
    res.render('blogs/create',{title:'Create Blog'});
}

const blogCreatePost = (req,res)=>{
}

const blogUpdateget = (req,res)=>{
    res.render('blogs/update',{title:'Update Blog'});
}


const blogUpdatePost = (req,res)=>{
   
}

const blogShow = (req,res)=>{
    res.render('blogs/show',{title:'Show Blog'});
}

module.exports = {
    blogIndex,
    blogCreateGet,
    blogCreatePost,
    blogUpdateget,
    blogUpdatePost,
    blogShow
}