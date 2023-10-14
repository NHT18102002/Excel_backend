const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formCaculateTinhluongSchema = new Schema({


    
em_id:{
    type:Number
},
com_id:{
    type: Number
},
form_excels:{
    type:String
},
form_caculate:{
    type: String
},
user_edit:{
    type: String
},
time_edited:{
    type: Date
},
time_created:{
    type: Date,
    default: Date.now
}

});

module.exports = mongoose.model('FormCaculateTinhluong', formCaculateTinhluongSchema);
