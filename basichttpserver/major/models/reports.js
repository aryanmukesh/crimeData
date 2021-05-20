const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    offence:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        requierd:true
    },
    long:{
        type:String,
        required:true
    },
    lat:{
        type:String,
        required:true
    }

});



const Report = mongoose.model('Report',reportSchema);
module.exports = Report;