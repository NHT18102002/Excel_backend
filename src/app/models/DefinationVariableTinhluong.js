const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DefinationVariableTinhluongSchema = new Schema({

    _id: {
        type: Number,
        // require: true
    },
    com_id: {
        type: Number
    },
    name_var:{
        type: String,

    },
    note_var:{
        type:String
    },
    time_created: {
        type: Date,
        default: Date.now
    },
    time_edited: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('DefinationVariableTinhluong', DefinationVariableTinhluongSchema);
