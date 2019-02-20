const Validator = require("validator");
const isEmpty = require("./is-empty");

/**
 * @todo write all validation rules for default appartment
 *
 * @todo In the futur : adress validation must be done by mapbox api and therefore will fill the coordianate fields when submited using geocoding
 *
 * @todo Add Types [Condo , Dupley , Triplex,Loft] In Appartment Model
 */

module.exports = function validateDefaultAppartmentInput(data) {
  let errors = {};

  // set empty attr to empty string

  if (Validator.isEmpty(data.rue)) {
    errors.rue = "rue field is required";
  }

  // write validation rules

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
