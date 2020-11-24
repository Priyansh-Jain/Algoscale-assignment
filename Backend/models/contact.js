var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb+srv://priyansh:priyansh0327@cluster0.3dshr.mongodb.net/Algoscale-assignment?retryWrites=true&w=majority');

autoIncrement.initialize(connection);

var ContactSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true,
    },
    Email:{
        type: String,
        required: true,
    },
    Message:{
        type: String,
        required: true,
    },
    Dates:{
        type:String,
        required:true,
    }
}, {
    versionKey: false 
});

ContactSchema.plugin(autoIncrement.plugin, 'contact');
var contact = mongoose.model('contact', ContactSchema);
module.exports = contact;