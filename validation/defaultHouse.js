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

  // FIELDS MUST BE REQUIRED
  if (Validator.isEmpty(data.rue)) {
    errors.rue = "rue field is required";
  }

  if (Validator.isEmpty(data.code_postal)) {
    errors.code_postal = "code postal is required";
  }

  if (Validator.isEmpty(data.ville)) {
    errors.ville = "ville is required";
  }

  if (Validator.isEmpty(data.surface_habitable)) {
    errors.surface_habitable = "surface_habitable is required";
  }

  if (Validator.isEmpty(data.surface_totale_terrain)) {
    errors.surface_totale_terrain = "surface_totale_terrain is required";
  }
  if (Validator.isEmpty(data.surface_habitable_constructible)) {
    errors.surface_habitable_constructible =
      "surface_habitable_constructible is required";
  }

  if (Validator.isEmpty(data.nombre_pieces)) {
    errors.nombre_pieces = "nombre_pieces is required";
  }
  if (Validator.isEmpty(data.nombre_salle_bain)) {
    errors.nombre_salle_bain = "nombre_salle_bain is required";
  }

  if (Validator.isEmpty(data.nombre_niveaux)) {
    errors.nombre_niveaux = "nombre_niveaux is required";
  }

  if (Validator.isEmpty(data.annee_construction)) {
    errors.annee_construction = "annee_construction is required";
  }

  if (Validator.isEmpty(data.diagnostic_performance_energetique)) {
    errors.diagnostic_performance_energetique =
      "diagnostic_performance_energetique is required";
  }

  if (Validator.isEmpty(data.etat_bien)) {
    errors.etat_bien = "etat_bien is required";
  }

  if (Validator.isEmpty(data.qualite_maison)) {
    errors.qualite_maison = "qualite_maison is required";
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

  if (Validator.isEmpty(data.qualite_toiture)) {
    errors.qualite_toiture = "qualite_toiture is required";
  }

  // END OF REQUIRED FIELDS

  // SPECIFIC RULES FIELDS
  /*
  if (
    !Validator.isLength(data.code_postal, { min: 5, max: 5 }) ||
    !Validator.isNumeric(data.code_postal, { no_symbols: true })
  ) {
    errors.code_postal = "code postal msut be 5 digits and positive";
  }

  if (!Validator.isNumeric(data.surface_habitable, { no_symbols: true })) {
    errors.surface_habitable = "surface_habitable must be greater than 0";
  }
  if (!Validator.isNumeric(data.surface_totale_terrain, { no_symbols: true })) {
    errors.surface_totale_terrain =
      "surface_totale_terrain  must be greater than 0";
  }

  if (
    !Validator.isNumeric(data.surface_habitable_constructible, {
      no_symbols: true
    })
  ) {
    errors.surface_habitable_constructible =
      "surface_habitable_constructible must be equal or greater than 0";
  }

  if (!Validator.isNumeric(data.nombre_pieces, { no_symbols: true })) {
    errors.nombre_pieces = "nombre_pieces must be greater than 0";
  }

  if (!Validator.isNumeric(data.nombre_salle_bain, { no_symbols: true })) {
    errors.nombre_salle_bain = "nombre_salle_bain must be greater than 0";
  }

  if (!Validator.isNumeric(data.nombre_niveaux, { no_symbols: true })) {
    errors.nombre_niveaux = "nombre_niveaux must be greater than 0";
  }

  if (!Validator.isInt(data.annee_construction, { gt: 1900, lt: 2019 })) {
    errors.annee_construction =
      "annee_construction and must be between 1900 and 2019";
  }

  if (
    !Validator.matches(
      data.diagnostic_performance_energetique,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G"
    )
  ) {
    errors.diagnostic_performance_energetique =
      "diagnostic_performance_energetique must match the given elements in the select";
  }

  if (
    !Validator.matches(
      data.etat_bien,
      "standard",
      "rafraichissment_necessaire",
      "travaux_importants_necessaires"
    )
  ) {
    errors.etat_bien = "etat_bien must match the given elements in the select";
  }

  if (
    !Validator.matches(
      data.qualite_maison,
      "inferieure",
      "comparable",
      "suprerieure"
    )
  ) {
    errors.qualite_maison =
      "qualite_maison must match the given elements in the select";
  }

  if (
    !Validator.matches(
      data.luminosite,
      "sombre",
      "peu_clair",
      "standard",
      "clair",
      "tres_clair"
    )
  ) {
    errors.luminosite =
      "luminosite must match the given elements in the select";
  }

  if (
    !Validator.matches(
      data.calme,
      "tres_bruyant",
      "bruyant",
      "standard",
      "calme",
      "tres_calme"
    )
  ) {
    errors.calme = "calme must match the given elements in the select";
  }

  if (
    !Validator.matches(
      data.proximite_transports,
      "tres_elogoignees",
      "eloigne",
      "standard",
      "proche",
      "tres_proche"
    )
  ) {
    errors.proximite_transports =
      "proximite_transports must match the given elements in the select";
  }

  if (
    !Validator.matches(
      data.qualite_toiture,
      "a_renover",
      "standard",
      "refaite_a_neuf"
    )
  ) {
    errors.qualite_toiture =
      "qualite_toiture must match the given elements in the select";
  }
*/
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
