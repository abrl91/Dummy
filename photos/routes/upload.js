var express = require('express');
var router = express.Router();
var join = require('path').join;
var fs = require('fs');
var Photos = require('../models/photos');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('upload')
});

router.post('/', function (req, res, next) {
    // console.log(req.file);
    // console.log(req.file.originalname);

    var img = req.file,
        name = img.originalname,
        path = join(__dirname + '/../public/images/', img.originalname);

    fs.rename(
        img.path,
        path,
        function (err) {

            if (err) {
                return next(err);
            }

            Photos.create({
                    name: name,
                    path: name
                },
                function (err) {

                    if (err) {
                        return next(err);
                    }
                    res.redirect('./photos');
                });
        }); //rename

}); //post


module.exports = router;