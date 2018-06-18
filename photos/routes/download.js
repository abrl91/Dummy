// var express = require('express');
// var router = express.Router();
var Photos = require('../models/photos');
var join = require('path').join;


exports.download = function(dir) {

    return function(req, res, next) {
        var id = req.params.id;

        Photos.findById(id,
            function(err, photo) {
                if (err) {
                    return next(err);
                }
                var path = join(dir, photo.path);

                res.download(path, photo.name + '.jpeg');
            });
    };
};

// לשלוח בקשת get לשרת עם id של התמונה <a href = id> , route 
// למצוא את התמונה ב db  photos.find{id}
// לשלוח את התמונה   res.
