var mongoose = require('mongoose');

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
    name: 'Express (jpg)',
    path: 'express.jpg'
}).save();

    