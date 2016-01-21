var express = require('express');
var router = express.Router();
var validate = require('../lib/validations');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function (req, res, next) {
   var user = {
     name: req.body.name,
     phone: req.body.phone,
     email: req.body.email
   };
  var errors = validate.validate(req.body)
  if(errors.length){
    res.render('index', {errors: errors, user: user})
  } else {
    res.send('You are so valid!');
  }
})

module.exports = router;
