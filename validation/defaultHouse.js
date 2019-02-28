const Validator = require("validator");
const isEmpty = require("./is-empty");

/**
 * @todo write all validation rules for default house
 *
 * @todo In the futur : adress validation must be done by mapbox api and therefore will fill the coordianate fields when submited using geocoding
 *
 */



module.exports = function validateDefaultHouseInput(data) {
  let errors = {};
  
    // Set empty fields to empty string
  data.rue = !isEmpty(data.rue) ? data.rue : "";
  data.code_postal = !isEmpty(data.code_postal) ? data.code_postal : "";
  data.ville = !isEmpty(data.ville) ? data.ville : "";
  data.surface_habitable = !isEmpty(data.surface_habitable)
    ? data.surface_habitable
    : "";
  data.surface_totale_terrain = !isEmpty(data.surface_totale_terrain)
    ? data.surface_totale_terrain
    : "";
  data.surface_habitable_constructible = !isEmpty(
    data.surface_habitable_constructible
  )
    ? data.surface_habitable_constructible
    : "";
  data.nombre_pieces = !isEmpty(data.nombre_pieces) ? data.nombre_pieces : "";
  data.nombre_salle_bain = !isEmpty(data.nombre_salle_bain)
    ? data.nombre_salle_bain
    : "";
  data.nombre_niveaux = !isEmpty(data.nombre_niveaux)
    ? data.nombre_niveaux
    : "";
  data.annee_construction = !isEmpty(data.annee_construction)
    ? data.annee_construction
    : "";
  data.diagnostic_performance_energetique = !isEmpty(
    data.diagnostic_performance_energetique
  )
    ? data.diagnostic_performance_energetique
    : "";
  data.etat_bien = !isEmpty(data.etat_bien) ? data.etat_bien : "";
  data.qualite_maison = !isEmpty(data.qualite_maison)
    ? data.qualite_maison
    : "";
  data.luminosite = !isEmpty(data.luminosite) ? data.luminosite : "";
  data.calme = !isEmpty(data.calme) ? data.calme : "";
  data.proximite_transports = !isEmpty(data.proximite_transports)
    ? data.proximite_transports
    : "";
  data.qualite_toiture = !isEmpty(data.qualite_toiture)
    ? data.qualite_toiture
    : "";
  // END OF EMPTY STRING

  
    if (Validator.isEmpty(data.rue)) {
    errors.rue = "rue field is required";
  }
  
  if(!Validator.isLength(data.code_postal {min:5,max:5}) || Validator.isEmpty(data.code_postal) || !Validator.isNumeric(data.code_postal {no_symbols:true})){
    errors.code_postal = "code postal is required and is 5 digits and is positive";
  }
  
  if(Validator.isEmpty(data.ville)){
    errors.ville = "ville is required";
  }
  
  if(Validator.isEmpty(data.surface_habitable) || !Validator.isNumeric(data.surface_habitable {no_symbols:true})){
    errors.surface_habitable = "surface_habitable is required and is a positive digit";
  }
  
  if(Validator.isEmpty(data.surface_totale_terrain) || !Validator.isNumeric(data.surface_totale_terrain {no_symbols:true})){
    errors.surface_totale_terrain = "surface_totale_terrain is required and is a positive digit";
  }
  
  if(Validator.isEmpty(data.surface_habitable_constructible) || !Validator.isNumeric(data.surface_habitable_constructible {no_symbols:true})){
    errors.surface_habitable_constructible = "surface_habitable_constructible is required and is a positive digit";
  }
  
  if(Validator.isEmpty(data.nombre_pieces) || !Validator.isNumeric(data.nombre_pieces {no_symbols:true})){
    errors.nombre_pieces = "nombre_pieces is required and is a positive digit";
  }
  
  if(Validator.isEmpty(data.nombre_salle_bain) || !Validator.isNumeric(data.nombre_salle_bain {no_symbols:true})){
    errors.nombre_salle_bain = "nombre_salle_bain is required and is a positive digit";
  }
  
  if(Validator.isEmpty(data.nombre_niveaux) || !Validator.isNumeric(data.nombre_niveaux {no_symbols:true})){
    errors.nombre_niveaux = "nombre_niveaux is required and is a positive digit";
  }
  
  if(Validator.isEmpty(data.annee_construction) || !Validator.isInt(data.annee_construction {gt: 1900, lt: 2019})){
    errors.annee_construction = "annee_construction is required and must be between 1900 and 2019";
  }
  
  if(Validator.isEmpty(data.diagnostic_performance_energetique) || !Validator.matches(data.diagnostic_performance_energetique, 'A', 'B', 'C', 'D', 'E', 'F', 'G')){
    errors.diagnostic_performance_energetique = "diagnostic_performance_energetique is required";
  }
  
  if(Validator.isEmpty(data.etat_bien) || !Validator.matches(data.etat_bien, 'standard','rafraichissment_necessaire','travaux_importants_necessaires')){
    errors.etat_bien = "etat_bien is required";
  }
  
    if(Validator.isEmpty(data.qualite_maison) || !Validator.matches(data.qualite_maison, 'inferieure', 'comparable', 'suprerieure')){
    errors.qualite_maison = "qualite_maison is required";
  }
  
    if(Validator.isEmpty(data.luminosite) || !Validator.matches(data.luminosite, 'sombre', 'peu_clair', 'standard', 'clair', 'tres_clair')){
    errors.luminosite = "luminosite is required";
  }
  
    if(Validator.isEmpty(data.calme) || !Validator.matches(data.calme, 'tres_bruyant', 'bruyant', 'standard', 'calme', 'tres_calme')){
    errors.calme = "calme is required";
  }
  
    if(Validator.isEmpty(data.proximite_transports) || !Validator.matches(data.proximite_transports, 'tres_elogoignees', 'eloigne', 'standard', 'proche', 'tres_proche')){
    errors.proximite_transports = "proximite_transports is required";
  }
  
    if(Validator.isEmpty(data.qualite_toiture) || !Validator.matches(data.qualite_toiture, 'a_renover', 'standard', 'refaite_a_neuf')){
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
