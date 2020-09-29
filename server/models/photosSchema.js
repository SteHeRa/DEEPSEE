const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/DEEPSEE');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  URL: {type: String, required: [true, 'Photo requires URL']},
  country: {type: String, required: [true, 'Photo requires Country']},
  region: {type: String, required: [true, 'Photo requires Region']},
  diveSite: {type: String, required: [true, 'Photo requires Dive Site']},
  date: {type: Number, required: [true, 'Photo requires Date']},
  temp: {type: String},
  visibility: {type: String},
});

module.exports = mongoose.model('Photo', photoSchema);