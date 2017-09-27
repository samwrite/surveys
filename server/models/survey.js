const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    creator: {type: String},
    question: {type: String},
    o1: {type: String},
    o2: {type: String},
    o3: {type: String},
    o4: {type: String},
    o1c: {type: Number},
    o2c: {type: Number},
    o3c: {type: Number},
    o4c: {type: Number}},
    {timestamps:true})

mongoose.model('Survey', SurveySchema);