module.exports = {
  nameIsNotBlank: function (input) {
    if (input.trim().length === 0) {
      return 'Name cannot be blank';
    }
    else {
      return '';
    }
  },
  emailIsValid: function(input) {
    var inputSplit = input.trim().split('');
    var inputReverseSplit = input.trim().split('').reverse();

    if (input.trim().length === 0) {
      return 'Email is invalid';
    }
    else if (input.trim() === '@') {
      return 'Email is invalid';
    }
    else if (inputSplit[0] === '@') {
      return 'Email is invalid';
    }
    else if (inputReverseSplit[0] !== 'm' || inputReverseSplit[1] !== 'o' || inputReverseSplit[2] !== 'c' || inputReverseSplit[3] !== '.') {
      return 'Email is invalid';
    }
    else {
      return '';
    }
  },
  phoneIsValid: function(input) {
    if (input.trim().length === 0) {
      return 'Phone number is invalid';
    }
    else if (input.trim().length < 10) {
      return 'Phone number is invalid';
    }
    else if (input.trim().length >= 13) {
      return 'Phone number is invalid';
    }
    else {
      return '';
    }
  }
}
