var mongoose = require('mongoose');
var assert = require('assert');
var path = require('path');

var db = mongoose.connect('mongodb://127.0.0.1/photo_app',
function(err) {
     if (err){
         console.log(err);
         }else{
             console.log('conected');
         }
     });

// Define the Photos schema
var schema = new mongoose.Schema({
    name: String,
    path: String
});

// Export the model
var Model = mongoose.model('Photo', schema);
module.exports = Model;

new Model({
    name: '01 (jpg)',
    path: 'express.jpg'
}).save();

new Model({
    name: '02 (jpg)',
    path: 'express.jpg'
}).save();

new Model({
    name: '03 (jpg)',
    path: 'express.jpg'
}).save();

new Model({
    name: '04 (jpg)',
    path: 'express.jpg'
}).save();

new Model({
    name: '05 (jpg)',
    path: 'express.jpg'
}).save();

new Model({
    name: '06 (jpg)',
    path: 'express.jpg'
}).save();

   