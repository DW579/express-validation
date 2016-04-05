var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  var errorsName = [];
  var errors = [];
  var errorsPhone = [];
  var emailSplit = req.body.email.trim().split('');
  var emailReverseSplit = req.body.email.trim().split('').reverse();

  if (req.body.name.trim().length === 0) {
    errorsName.push('Name cannot be blank');
  }

  if (req.body.phone.trim().length === 0) {
    errorsPhone.push('Phone number is invalid');
  }
  else if (req.body.phone.trim().length < 10) {
    errorsPhone.push('Phone number is invalid');
  }
  else if (req.body.phone.trim().length >= 13) {
    errorsPhone.push('Phone number is invalid');
  }

  if (req.body.email.trim().length === 0) {
    errors.push('Email is invalid');
  }
  else if (req.body.email.trim() === '@') {
    errors.push('Email is invalid');
  }
  else if (emailSplit[0] === '@') {
    errors.push('Email is invalid');
  }
  else if (emailReverseSplit[0] !== 'm' || emailReverseSplit[1] !== 'o' || emailReverseSplit[2] !== 'c' || emailReverseSplit[3] !== '.') {
    errors.push('Email is invalid');
  }

  if (errors.length) {
    res.render('index', {errorsName: errorsName, errors: errors, errorsPhone: errorsPhone});
  }

  console.log('You are so valid');
});

module.exports = router;
