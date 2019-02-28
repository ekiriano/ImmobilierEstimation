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
  
  if(Validator.isLength(data.code_postal {min:5,max:5}) || Validator.isEmpty(data.code_postal) || Validator.isNumeric(data.code_postal {no_symbols:true})){
    errors.code_postal = "code postal is required and is 5 digits and is positive";
  }
  
  if(Validator.isEmpty(data.ville)){
    errors.ville = "ville is required";
  }
  
  if(Validator.isEmpty(data.surface) || Validator.isNumeric(data.surface {no_symbols:true})){
    errors.surface = "surface is required and is a positive digit";
  }
  
  if(Validator.isEmpty(data.nombre_pieces) || Validator.isNumeric(data.nombre_pieces {no_symbols:true})){
    errors.nombre_pieces = "nombre_pieces is required and is a positive digit";
  }
  
  if(Validator.isEmpty(data.nombre_salle_bain) || Validator.isNumeric(data.nombre_salle_bain {no_symbols:true})){
    errors.nombre_salle_bain = "nombre_salle_bain is required and is a positive digit";
  }
  
  if(Validator.isEmpty(data.etage) || Validator.isNumeric(data.etage {no_symbols:true})){
    errors.etage = "etage is required and must be a positive digit";
  }
  
  if(Validator.isEmpty(data.nombre_etage_total) || Validator.isNumeric(data.nombre_etage_total {no_symbols:true})){
    errors.nombre_total_etage = "nombre_total_etage is required and must be a positive digit";
  }
  
  if(Validator.isEmpty(data.annee_construction) || Validator.isInt(data.annee_construction {gt: 1900, lt: 2019})){
    errors.annee_construction = "annee_construction is required and must be between 1900 and 2019";
  }
  
  if(Validator.isEmpty(data.diagnostic_performance_energetique) || Validator.matches(data.diagnostic_performance_energetique, 'A', 'B', 'C', 'D', 'E', 'F', 'G')){
    errors.diagnostic_performance_energetique = "diagnostic_performance_energetique is required";
  }
  
  if(Validator.isEmpty(data.etat_bien) || Validator.matches(data.etat_bien, 'standard','rafraichissment_necessaire','travaux_importants_necessaires')){
    errors.etat_bien = "etat_bien is required";
  }
  
    if(Validator.isEmpty(data.qualite_maison) || Validator.matches(data.qualite_maison, 'inferieure', 'comparable', 'suprerieure')){
    errors.qualite_maison = "qualite_maison is required";
  }
  
    if(Validator.isEmpty(data.luminosite) || Validator.matches(data.luminosite, 'sombre', 'peu_clair', 'standard', 'clair', 'tres_clair')){
    errors.luminosite = "luminosite is required";
  }
  
    if(Validator.isEmpty(data.calme) || Validator.matches(data.calme, 'tres_bruyant', 'bruyant', 'standard', 'calme', 'tres_calme')){
    errors.calme = "calme is required";
  }
  
    if(Validator.isEmpty(data.qualite_toiture) || Validator.matches(data.qualite_toiture, 'tres_elogoignees', 'eloigne', 'standard', 'proche', 'tres_proche')){
    errors.qualite_toiture = "qualite_toiture is required";
  }
  
    if(Validator.isEmpty(data.prix_estimation)){
    errors.prix_estimation = "prix_estimation is required";
  }
  
  
  
  
  
  
  

  // write validation rules

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
