const Validator = require("validator");
const isEmpty = require("./is-empty");

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

  // write validation rules

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
