
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema({ 

    topic : {

        type : String,
        required : true,
        unique : true,
    },


},{ timestamps : true });

const Topic = mongoose.model('Topic',topicSchema);

module.exports = Topic;