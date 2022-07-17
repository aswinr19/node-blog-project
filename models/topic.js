
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema({ 

    topic : {

        type : String,
        required : true,
    },


},{ timestamps : true });

const Topic = mongoose.model('Topic',topicSchema);