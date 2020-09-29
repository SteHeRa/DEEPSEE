const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/DEEPSEE');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, required: [true, 'User requires Email Address']},
  firstName: {type: String, required: [true, 'User requires First Name']},
  lastName: {type: String, required: [true, 'User requires Last Name']},
  logs: {type: [{
    date: {type: Number, required: [true, 'Log requires Date']},
    country: {type: String, required: [true, 'Log requires Country']},
    region: {type: String, required: [true, 'Log requires Region']},
    diveSite: {type: String, required: [true, 'Log requires Dive Site']},
    bodyOfWater: {type: String},
    maxDepth: {type: String},
    avgDepth: {type: String},
    diveTime: {type: String},
    temp: {type: String},
    waterType: {type: String},
    visibility: {type: String},
    buddy: {type: String},
    verifiedBy: {type: String},
    notes: {type: String},
    photos: {type: [String]}
    }]}
}, {autoCreate: true});

module.exports = mongoose.model('User', userSchema);