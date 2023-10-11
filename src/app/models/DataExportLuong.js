const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataExportLuongSchema = new Schema({
  com_id: {
    type: Number,
    required : true,
  },
  dataExportLuong: {
    type: [],
    required : true,
  },
});

module.exports = mongoose.model("DataExportLuong", DataExportLuongSchema);
