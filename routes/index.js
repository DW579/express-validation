var express = require('express');
var router = express.Router();
var validate = require('../lib/validations');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function (req, res, next) {
  var errors = [];
  errors.push(validate.nameIsNotBlank(req.body.name));
  errors.push(validate.emailIsValid(req.body.email));
  errors.push(validate.phoneIsValid(req.body.phone));
  errors = validate.validate(errors);
  if(errors.length){
    res.render('index', {errors: errors})
  } else {
    res.send('You are so valid!');
  }
})

module.exports = router;
