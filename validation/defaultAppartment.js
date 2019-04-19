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

  if (Validator.isEmpty(data.code_postal)) {
    errors.code_postal =
      "code postal is required and is 5 digits and is positive";
  }

  if (Validator.isEmpty(data.ville)) {
    errors.ville = "ville is required";
  }

  if (Validator.isEmpty(data.surface)) {
    errors.surface = "surface is required ";
  }

  if (Validator.isEmpty(data.nombre_pieces)) {
    errors.nombre_pieces = "nombre_pieces is required";
  }

  if (Validator.isEmpty(data.nombre_salle_bain) ) {
    errors.nombre_salle_bain =
      "nombre_salle_bain is required";
  }

  if (Validator.isEmpty(data.etage)) {
    errors.etage = "etage is required";
  }

  if ( Validator.isEmpty(data.nombre_etage_total) ) {
    errors.nombre_etage_total =
      "nombre_total_etage is required ";
  }

  if(Validator.isEmpty(data.annee_construction) ) {
    errors.annee_construction = "annee_construction is required";
  }

  if(Validator.isEmpty(data.diagnostic_performance_energetique) ) {
    errors.diagnostic_performance_energetique = "diagnostic_performance_energetique is required";
  }

  if (Validator.isEmpty(data.etat_bien) ) {
    errors.etat_bien = "etat_bien is required";
  }

  if (Validator.isEmpty(data.qualite_appartement) ) {
    errors.qualite_maison = "qualite_appartement is required";
  }

  if (Validator.isEmpty(data.luminosite)) {
    errors.luminosite = "luminosite is required";
  }

  if (Validator.isEmpty(data.calme)) {
    errors.calme = "calme is required";
  }

  if (Validator.isEmpty(data.proximite_transports)) {
    errors.proximite_transports = "proximite_transports is required";
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
