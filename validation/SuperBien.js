const Validator = require("validator");
const isEmpty = require("./is-empty");

/**
 * @todo write all validation rules for house
 *
 * @todo In the futur : adress validation must be done by mapbox api and therefore will fill the coordianate fields when submited using geocoding
 *
 * @todo Add Types [Condo , Dupley , Triplex,Loft] In Appartment Model
 */

 module.exports = function validateHouseInput(data) {
   let errors = {};

// set empty fields to empty strings



// required fields validation

///////////////////////////// client validation ////////////////////////////////

// if (
//   Validator.isEmpty(data.civilite) ||
//   !Validator.matches(
//     data.civilite,
//     "aucun",
//     "monsieur",
//     "madame",
//     "monsieur et madame",
//     "messieurs",
//     "mesdames"
//   )
// ) {
//   errors.civilite =
//     "civilite is required";
// }
//
// if (Validator.isEmpty(data.prenom)) {
//   errors.rue = "first name is required";
// }
//
// if (Validator.isEmpty(data.nom)) {
//   errors.rue = "last name is required";
// }
//
// if (Validator.isEmpty(data.email)) {
//   errors.codePostal = "email is required";
// }
//
// if (Validator.isEmpty(data.telephone) ||
// !Validator.isNumeric(data.telephone, { no_symbols: true }))
// {
//   errors.telephone = "telephone is required";
// }
//
// ///////////////////////////// end of client validation ////////////////////////////////
//
// ///////////////////////////// bienImmobillier validation ////////////////////////////////
//
// // bienImmobillier.validation
//
// if (
//   !Validator.isLength(data.numero, { min: 1, max: 3 }) ||
//   Validator.isEmpty(data.numero) ||
//   !Validator.isNumeric(data.numero, { no_symbols: true })
// ) {
//   errors.numero =
//     "street number is required";
// }
//
// if (Validator.isEmpty(data.voie)) {
//   errors.ville = "street name is required";
// }
//
// if (
//   !Validator.isLength(data.codePostal, { min: 5, max: 5 }) ||
//   Validator.isEmpty(data.codePostal) ||
//   !Validator.isNumeric(data.codePostal, { no_symbols: true })
// ) {
//   errors.codePostal =
//     "code postal is required and is 5 digits and is positive";
// }
//
// if (Validator.isEmpty(data.ville)) {
//   errors.ville =
//     "city name is required";
// }
//
// // end of bienImmobillier.validation
//
// // bienImmobillier informations validation
//
// if (
//   Validator.isEmpty(data.anneeConstruction) ||
//   !Validator.isInt(data.anneeConstruction, { gt: 1900, lt: 2019 })
// ) {
//   errors.anneeConstruction =
//     "annee_construction is required and must be between 1900 and 2019";
// }
//
// if (Validator.isEmpty(data.typeBienAffiche)) {
//   errors.typeBienAffiche =
//     "number of pieces is required and must be positive";
// }
//
// if (Validator.isEmpty(data.nombrePieces)) {
//   errors.nombrePieces =
//     "number of pieces is required and must be positive";
// }
//
// if (Validator.isEmpty(data.nombreChambres)) {
//   errors.nombreChambres =
//     "number of rooms is required and must be positive";
// }
//
// if (Validator.isEmpty(data.surfaceHabitable)) {
//   errors.surfaceHabitable =
//     "habitable surface is required and must be positive";
// }
//
// if (Validator.isEmpty(data.surfaceTerrain)) {
//   errors.surfaceTerrain =
//     "ground surface is required and must be positive";
// }
//
// if (Validator.isEmpty(data.nombreNiveaux)) {
//   errors.nombreNiveaux =
//     "number of levels is required and must be positive";
// }
//
// if (Validator.isEmpty(data.ascenseur)) {
//   errors.ascenseur =
//     "elevator is required";
// }
//
// if (Validator.isEmpty(data.balconOuTerrasse)) {
//   errors.balconOuTerrasse =
//     "balcony is required";
// }
//
// if (Validator.isEmpty(data.LibreALaVente)) {
//   errors.LibreALaVente =
//     "Libre a la vente is required";
// }
//
// if (Validator.isEmpty(data.titreDossier)) {
//   errors.titreDossier =
//     "Titre du dossier is required";
// }
//
// if (Validator.isEmpty(data.descriptifBien)) {
//   errors.descriptifBien =
//     "Descriptif du bien is required";
// }
//
// if (Validator.isEmpty(data.DPE)||
// !Validator.matches(
//   data.DPE,
//   'A++',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F'
// )
// ) {
// errors.DPE =
//   "DPE is required";
// }
//
//
// if (Validator.isEmpty(data.GES)||
// !Validator.matches(
//   data.GES,
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F'
// )
// ) {
// errors.GES =
//   "GES is required";
// }
//
// if (Validator.isEmpty(data.prixMandat)) {
//   errors.prixMandat =
//     "Prix Mandat is required";
// }
//
// // end of masion informations validation
//
// // chargesEtImpots
//
// if (Validator.isEmpty(data.chargesAnnuellesTotales)) {
//   errors.chargesAnnuellesTotales =
//     "annual chargesEtImpots is required";
// }
//
// if (Validator.isEmpty(data.chargesDeCopropriete)) {
//   errors.chargesDeCopropriete =
//     "coprepriete chargesEtImpots is required";
// }
//
// if (Validator.isEmpty(data.impotsFonciers)) {
//   errors.impotsFonciers =
//     "impots is required";
// }
//
// // end of chargesEtImpots
//
// // bienImmobillier photos_plan validation
//
//
// // end of bienImmobillier photos_plan validation
//
// // bienImmobillier annexes validation
//
//
// // end of bienImmobillier annexes validation
//
// // bienImmobillier points validation
//
//
// // end of bienImmobillier points validationTrés
//
// // bienImmobillier commentaires validation
//
//
// // end of bienImmobillier commentaires validation
//
//
//
// ///////////////////////////// end of bienImmobillier validation ////////////////////////////////
//
// ///////////////////////////// caracteristiques validation ////////////////////////////////
//
// // caracteristiques elementsPrincipaux validation
//
// if (
//   Validator.isEmpty(data.etatQualiteGrosOeuvre) ||
//   !Validator.matches(
//     data.etatQualiteGrosOeuvre,
//     'Mauvais',
//     'Médiocre',
//     'Moyen',
//     'Bon',
//     'Trés bon'
//   )
// ) {
//   errors.etatQualiteGrosOeuvre =
//     "etat is required";
// }
//
// if (
//   Validator.isEmpty(data.epoqueConstruction) ||
//   !Validator.matches(
//     data.epoqueConstruction,
//     'Pas recherché',
//     'Peu recherché',
//     'Neutre',
//     'Recherché',
//     'Trés recherché'
//   )
// ) {
//   errors.epoqueConstruction =
//     "epoque de contruction is required";
// }
//
// if (
//   Validator.isEmpty(data.mitoyennete) ||
//   !Validator.matches(
//     data.mitoyennete,
//     '3 côtés',
//     '2 côtés',
//     '1 côtés',
//     'Par dependance',
//     'Maison independante'
//   )
// ) {
//   errors.mitoyennete =
//     "mitoyennete is required";
// }
//
// // if (
// //   Validator.isEmpty(data.agrementGeneral) ||
// //   !Validator.matches(
// //     data.agrementGeneral,
// //     'Trés desagreable',
// //     'Desagreable',
// //     'Moyen',
// //     'Agreable',
// //     'Trés agreable'
// //   )
// // ) {
// //   errors.agrementGeneral =
// //     "general agreement is required";
// // }
//
// if (
//   Validator.isEmpty(data.standing) ||
//   !Validator.matches(
//     data.standing,
//     'Mauvais',
//     'Médiocre',
//     'Moyen',
//     'Bon',
//     'Trés bon'
//   )
// ) {
//   errors.standing =
//     "standing is required";
// }
//
// if (
//   Validator.isEmpty(data.accessibilite) ||
//   !Validator.matches(
//     data.accessibilite,
//     'Trés difficile',
//     'Difficile',
//     'Normal',
//     'Facile',
//     'Trés facile'
//   )
// ) {
//   errors.accessibilite =
//     "accessibilité is required";
// }
//
// if (
//   Validator.isEmpty(data.toutAEgout) ||
//   !Validator.matches(
//     data.toutAEgout,
//     'Rien',
//     'A revoir',
//     'Assainissement individuel',
//     'Partiel',
//     'Complet'
//   )
// ) {
//   errors.toutAEgout =
//     "tout a l'egout is required";
// }
//
// // end of caracteristiques elementsPrincipaux validation
//
// // caracteristiques autresElements validation
//
// if (
//   Validator.isEmpty(data.qualiteArchitecturale) ||
//   !Validator.matches(
//     data.qualiteArchitecturale,
//     'Mauvaise',
//     'Médiocre',
//     'Moyenne',
//     'Bonne',
//     'Trés bonne'
//   )
// ) {
//   errors.qualiteArchitecturale =
//     "Qualite architecturale is required";
// }
//
// if (
//   Validator.isEmpty(data.etatPortesEtFenetres) ||
//   !Validator.matches(
//     data.etatPortesEtFenetres,
//     'Mauvais',
//     'Médiocre',
//     'Moyen',
//     'Bon',
//     'Trés bon'
//   )
// ) {
//   errors.etatPortesEtFenetres =
//     "etat des portes et fenetres is required";
// }
//
// if (
//   Validator.isEmpty(data.etatDesToitures) ||
//   !Validator.matches(
//     data.etatDesToitures,
//     'Mauvais',
//     'Médiocre',
//     'Moyen',
//     'Bon',
//     'Trés bon'
//   )
// ) {
//   errors.etatDesToitures =
//     "etat des toitures is required";
// }
//
// if (
//   Validator.isEmpty(data.clotureTerrain) ||
//   !Validator.matches(
//     data.clotureTerrain,
//     'Aucun/Mauvais',
//     'Médiocre',
//     'Moyen',
//     'Bon'
//   )
// ) {
//   errors.clotureTerrain =
//     "Cloture terrain is required";
// }
// // end of caracteristiques autresElements validation
//
// // caracteristiques environnement validation
//
// if (
//   Validator.isEmpty(data.nuissanceSonore) ||
//   !Validator.matches(
//     data.nuissanceSonore,
//     'Trés bruyant',
//     'Bruyant',
//     'Normal',
//     'Calme'
//   )
// ) {
//   errors.nuissanceSonore =
//     "Qualite architecturale is required";
// }
//
// if (
//   Validator.isEmpty(data.voisinageVisaVis) ||
//   !Validator.matches(
//     data.voisinageVisaVis,
//     'Trés gênant',
//     'Gênant',
//     'Normal',
//     'Calme',
//     'Aucun'
//   )
// ) {
//   errors.voisinageVisaVis =
//     "Qualite architecturale is required";
// }
//
// if (
//   Validator.isEmpty(data.qualiteEnvironnement) ||
//   !Validator.matches(
//     data.qualiteEnvironnement,
//     'Mauvaise',
//     'Médiocre',
//     'Moyenne',
//     'Bonne',
//     'Trés bonne'
//   )
// ) {
//   errors.qualiteEnvironnement =
//     "Qualite architecturale is required";
// }
//
// if (
//   Validator.isEmpty(data.proximiteServicesPublics) ||
//   !Validator.matches(
//     data.proximiteServicesPublics,
//     'Trés éloignés',
//     'Assez éloignés',
//     'Normales',
//     'Proches',
//     'Trés proches'
//   )
// ) {
//   errors.proximiteServicesPublics =
//     "Qualite architecturale is required";
// }
//
// // end of caracteristiques environnement validation
//
// // caracteristiques criteresGeneraux validation
//
// if (
//   Validator.isEmpty(data.qualiteDistribution) ||
//   !Validator.matches(
//     data.qualiteDistribution,
//     'Mauvaise',
//     'Médiocre',
//     'Moyenne',
//     'Bonne'
//   )
// ) {
//   errors.qualiteDistribution =
//     "qualiteDistribution is required";
// }
//
// if (
//   Validator.isEmpty(data.etatMursPlafonds) ||
//   !Validator.matches(
//     data.etatMursPlafonds,
//     'A refaire',
//     'Usagé',
//     'Moyen',
//     'Récent',
//     'Neuf'
//   )
// ) {
//   errors.etatMursPlafonds =
//     "etatMursPlafonds is required";
// }
//
// if (
//   Validator.isEmpty(data.solsEtRevetementSols) ||
//   !Validator.matches(
//     data.solsEtRevetementSols,
//     'A refaire',
//     'Médiocre',
//     'Convenable',
//     'Bon',
//     'Trés bon'
//   )
// ) {
//   errors.solsEtRevetementSols =
//     "solsEtRevetementSols is required";
// }
//
// // end of caracteristiques criteresGeneraux validation
//
// // caracteristiques sejour validation
//
// if (
//   Validator.isEmpty(data.tailleSejour) ||
//   !Validator.matches(
//     data.tailleSejour,
//     'Trés petit',
//     'Petit',
//     'Normal',
//     'Grand',
//     'Trés grand'
//   )
// ) {
//   errors.tailleSejour =
//     "tailleSejour is required";
// }
//
// if (
//   Validator.isEmpty(data.expositionSejour) ||
//   !Validator.matches(
//     data.expositionSejour,
//     'Mauvaise',
//     'Médiocre',
//     'Moyenne',
//     'Bonne',
//     'Trés bonne'
//   )
// ) {
//   errors.expositionSejour =
//     "exposition is required";
// }
//
// if (
//   Validator.isEmpty(data.vueSejour) ||
//   !Validator.matches(
//     data.vueSejour,
//     'VisAVis/Proche',
//     'Médiocre',
//     'Ordinaire',
//     'Belle',
//     'Exceptionnelle'
//   )
// ) {
//   errors.vueSejour =
//     "vue is required";
// }
//
// if (
//   Validator.isEmpty(data.luminosite) ||
//   !Validator.matches(
//     data.luminosite,
//     'Mauvaise',
//     'Médiocre',
//     'Simple',
//     'Bonne',
//     'Trés bonne'
//   )
// ) {
//   errors.luminosite =
//     "lumonisite is required";
// }
//
// if (
//   Validator.isEmpty(data.cheminee) ||
//   !Validator.matches(
//     data.cheminee,
//     'Inexistante',
//     'Médiocre',
//     'Simple',
//     'Belle',
//     'Exceptionnelle'
//   )
// ) {
//   errors.cheminee =
//     "cheminee is required";
// }
//
// // end of caracteristiques sejour validation
//
// // caracteristiques cuisine validation
//
// if (
//   Validator.isEmpty(data.taille) ||
//   !Validator.matches(
//     data.taille,
//     'Trés petite',
//     'Petite',
//     'Normale',
//     'Grande',
//     'Trés grande'
//   )
// ) {
//   errors.taille =
//     "taille is required";
// }
//
// if (
//   Validator.isEmpty(data.equipement) ||
//   !Validator.matches(
//     data.equipement,
//     'Inexistant',
//     'Médiocre',
//     'Moyen',
//     'Bon',
//     'Trés bon'
//   )
// ) {
//   errors.equipement =
//     "equipement is required";
// }
//
// if (
//   Validator.isEmpty(data.etatGeneral) ||
//   !Validator.matches(
//     data.etatGeneral,
//     'Mauvais',
//     'Médiocre',
//     'Moyen',
//     'Bon',
//     'Trés bon'
//   )
// ) {
//   errors.etatGeneral =
//     "etatGeneral is required";
// }
//
// if (
//   Validator.isEmpty(data.agrement) ||
//   !Validator.matches(
//     data.agrement,
//     'Mauvais',
//     'Médiocre',
//     'Moyen',
//     'Agreable',
//     'Trés agreable'
//   )
// ) {
//   errors.agrement =
//     "agrement is required";
// }
//
// // end of caracteristiques cuisine validation
//
// // caracteristiques chambres validation
//
// if (
//   Validator.isEmpty(data.tailleDesPieces) ||
//   !Validator.matches(
//     data.tailleDesPieces,
//     'Trés petite',
//     'Petite',
//     'Normale',
//     'Grande',
//     'Trés grande'
//   )
// ) {
//   errors.tailleDesPieces =
//     "agrement is required";
// }
//
// if (
//   Validator.isEmpty(data.etatDesPieces) ||
//   !Validator.matches(
//     data.etatDesPieces,
//     'Mauvais',
//     'Médiocre',
//     'Moyen',
//     'Bon',
//     'Trés bon'
//   )
// ) {
//   errors.etatDesPieces =
//     "etatDesPieces is required";
// }
//
// if (
//   Validator.isEmpty(data.expositionAuxBruits) ||
//   !Validator.matches(
//     data.expositionAuxBruits,
//     'Trés bruyante',
//     'Bruyante',
//     'Moyenne',
//     'Faible',
//     'Trés faible'
//   )
// ) {
//   errors.expositionAuxBruits =
//     "expositionAuxBruits is required";
// }
//
// // end of caracteristiques chambres validation
//
// // caracteristiques sanitaires validation
//
// if (
//   Validator.isEmpty(data.taillePiecesSanitaires) ||
//   !Validator.matches(
//     data.taillePiecesSanitaires,
//     'Trés petite',
//     'Petite',
//     'Normale',
//     'Grande',
//     'Trés grande'
//   )
// ) {
//   errors.taillePiecesSanitaires =
//     "taille is required";
// }
//
// if (
//   Validator.isEmpty(data.nombreDeSanitaires) ||
//   !Validator.matches(
//     data.nombreDeSanitaires,
//     'Inexistant',
//     'Insuffisant',
//     'Normal',
//     'Elevé',
//     'Trés elevé'
//   )
// ) {
//   errors.nombreDeSanitaires =
//     "nombre is required";
// }
//
// if (
//   Validator.isEmpty(data.qualiteEtatSanitaires) ||
//   !Validator.matches(
//     data.qualiteEtatSanitaires,
//     'Mauvaise',
//     'Médiocre',
//     'Moyenne',
//     'Bonne',
//     'Trés bonne'
//   )
// ) {
//   errors.qualiteEtatSanitaires =
//     "qualite is required";
// }
//
// // end of caracteristiques sanitaires validation
//
// // caracteristiques energie validation
//
// if (
//   Validator.isEmpty(data.factureEnergetique) ||
//   !Validator.matches(
//     data.factureEnergetique,
//     'Trés elevée',
//     'Elevée',
//     'Moyenne',
//     'Faible',
//     'Trés faible'
//   )
// ) {
//   errors.factureEnergetique =
//     "factureEnergetique is required";
// }
//
// if (
//   Validator.isEmpty(data.installationElectrique) ||
//   !Validator.matches(
//     data.installationElectrique,
//     'Mauvaise',
//     'Médiocre',
//     'Moyenne',
//     'Bonne',
//     'Trés bonne'
//   )
// ) {
//   errors.installationElectrique =
//     "installation_electrique is required";
// }
//
// if (
//   Validator.isEmpty(data.installationGaz) ||
//   !Validator.matches(
//     data.installationGaz,
//     'Mauvaise',
//     'Médiocre',
//     'Moyenne',
//     'Bonne',
//     'Trés bonne'
//   )
// ) {
//   errors.installationGaz =
//     "installation_gaz is required";
// }
//
// // end of caracteristiques energie validation
//
// // caracteristiques annexes validation
//
// if (
//   Validator.isEmpty(data.balconLogiaTerasse) ||
//   !Validator.matches(
//     data.balconLogiaTerasse,
//     'Aucun',
//     'Médiocre',
//     'Moyen',
//     'Bien',
//     'Trés bien'
//   )
// ) {
//   errors.balconLogiaTerasse =
//     "balcon is required";
// }
//
// if (
//   Validator.isEmpty(data.caveSousSol) ||
//   !Validator.matches(
//     data.caveSousSol,
//     'Aucun',
//     'Médiocre',
//     'Moyen',
//     'Bien',
//     'Exceptionnel'
//   )
// ) {
//   errors.caveSousSol =
//     "cave is required";
// }
//
// if (
//   Validator.isEmpty(data.agrementJardin) ||
//   !Validator.matches(
//     data.agrementJardin,
//     'Trés médiocre',
//     'Médiocre',
//     'Moyen',
//     'Bien',
//     'Remarquable'
//   )
// ) {
//   errors.agrementJardin =
//     "agrementJardin is required";
// }
//
// if (
//   Validator.isEmpty(data.garageOuParkingOuvert) ||
//   !Validator.matches(
//     data.garageOuParkingOuvert,
//     'Sans',
//     'Médiocre',
//     'Moyen',
//     'Bien',
//     'Exceptionnel'
//   )
// ) {
//   errors.garageOuParkingOuvert =
//     "garageOuParkingOuvert is required";
// }
//
// if (
//   Validator.isEmpty(data.combles) ||
//   !Validator.matches(
//     data.comble,
//     'Aucune',
//     'Peu',
//     'Moyenne',
//     'Bonne',
//     'Exceptionnelle'
//   )
// ) {
//   errors.comble =
//     "comble is required";
// }
//
// // end of caracteristiques annexes validation
//
//
//
// ///////////////////////////// end of caracteristiques validation ////////////////////////////////
//
// ///////////////////////////// estimation validation ////////////////////////////////
//
// if (Validator.isEmpty(data.renove)) {
//   errors.renove =
//     "renove is required";
// }
//
// if (
//   Validator.isEmpty(data.renoveR) ||
//   !Validator.matches(
//     data.caracteristiques.renoveR,
//     '$',
//     '%'
//   )
// ) {
//   errors.renoveR =
//     "choix renove is required";
// }
//
// if (Validator.isEmpty(data.valorisationTerrain)) {
//   errors.valorisationTerrain =
//     "valorisationTerrain is required";
// }
//
// if (
//   Validator.isEmpty(data.valorisationTerrainR) ||
//   !Validator.matches(
//     data.caracteristiques.valorisationTerrainR,
//     '$',
//     '%'
//   )
// ) {
//   errors.valorisationTerrainR =
//     "choix valorisationTerrain is required";
// }
//
// if (Validator.isEmpty(data.travauxARealiser)) {
//   errors.travauxARealiser =
//     "travauxARealiser is required";
// }
//
// if (
//   Validator.isEmpty(data.travauxARealiserR) ||
//   !Validator.matches(
//     data.caracteristiques.travauxARealiserR,
//     '$',
//     '%'
//   )
// ) {
//   errors.travauxARealiserR =
//     "travauxARealiserR required";
// }
//
// if (Validator.isEmpty(data.autresElements)) {
//   errors.autresElements =
//     "autresElements is required";
// }
//
// if (
//   Validator.isEmpty(data.travauxARealiserR) ||
//   !Validator.matches(
//     data.caracteristiques.travauxARealiserR,
//     '$',
//     '%'
//   )
// ) {
//   errors.travauxARealiserR =
//     "travauxARealiserR is required";
// }




///////////////////////////// end of estimation validation ////////////////////////////////



// end of required fields validation

return {
  errors,
  isValid: isEmpty(errors)
};
};
