const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  /**
   *  If argument empty assign it to an empty string
   */
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordConfirmation = !isEmpty(data.passwordConfirmation)
    ? data.passwordConfirmation
    : "";

  /**
   * Check name between 2 and 30
   * @return boolean
   */
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  /**
   * Check if name is an empty string
   * @return boolean
   */
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  /**
   * Check if email is an empty string
   * @return boolean
   */
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  /**
   * Check if email is at an email format
   * @return boolean
   */
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  /**
   * Check if password is an empty string
   * @return boolean
   */

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  /**
   * Check if password is between 6 and 30
   * @return boolean
   */
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  /**
   * Check if passwordConfirmation is an empty string
   * @return boolean
   */
  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = "Confirm Password field is required";
  }

  /**
   * Check if password and password 2 match
   * @return boolean
   */
  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
