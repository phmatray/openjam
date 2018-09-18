const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.label = !isEmpty(data.label) ? data.label : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title is required';
  }

  if (Validator.isEmpty(data.label)) {
    errors.label = 'Label is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
