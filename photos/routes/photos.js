var Photos = require('../models/Photo');
var path = require('path');
var fs = require('fs');

var join = path.join;

exports.list = function(req, res, next) {
  Photos.find(
      {}, 
      function(err, photos) {

          if (err) {
              return next(err);
          }

          res.render('photos', {
              title: 'Photos',
              photos: photos
          });
      });
};