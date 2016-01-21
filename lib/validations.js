module.exports = {
  nameIsNotBlank: function (input) {
  return !input.trim() ? 'Name cannot be blank' : '';
},
  emailIsValid: function (input) {
    return !input.trim() ? 'Email is invalid' : '';
  },
  phoneIsValid: function (input) {
    return !input.trim() ? 'Phone number is invalid' : '';
  },
  validate: function (errors) {
    return errors.filter(function (error) {
      return error.trim();
    })
  }
}
