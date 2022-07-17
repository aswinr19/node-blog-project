
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({ 

    comment : {

        type : String,
        required : true,
    },


},{ timestamps : true });

const Comment = mongoose.model('Comment',commentSchema);