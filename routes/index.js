var express = require('express');
var router = express.Router();

var validations = require('../lib/validations.js')

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  var inputName = [];
  var inputPhone = [];
  var inputEmail = [];
  var errors = [];
  var emailSplit = req.body.email.trim().split('');
  var emailReverseSplit = req.body.email.trim().split('').reverse();

  if (validations.nameIsNotBlank(req.body.name) === 'Name cannot be blank') {
    errors.push('Name cannot be blank');
  }
  else {
    inputName.push(req.body.name);
  }

  if (validations.phoneIsValid(req.body.phone) === 'Phone number is invalid') {
    errors.push('Phone number is invalid');
  }
  else {
    inputPhone.push(req.body.phone);
  }

  if (validations.emailIsValid(req.body.email) === 'Email is invalid') {
    errors.push('Email is invalid');
  }
  else {
    inputEmail.push(req.body.email);
  }

  if (errors.length) {
    res.render('index', {errors: errors, inputName: inputName, inputPhone: inputPhone, inputEmail: inputEmail});
  }
  else {
    console.log('You are so valid');
  }
});

module.exports = router;
