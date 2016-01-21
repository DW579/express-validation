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
  validate: function (input) {
    var errors = [];
    errors.push(this.nameIsNotBlank(input.name));
    errors.push(this.emailIsValid(input.email));
    errors.push(this.phoneIsValid(input.phone));
    return errors.filter(function (error) {
      return error.trim();
    })
  }
}
