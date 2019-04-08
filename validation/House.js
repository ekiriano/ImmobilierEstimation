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

if (
  Validator.isEmpty(data.client.civilite) ||
  !Validator.matches(
    data.civilite,
    "aucun",
    "monsieur",
    "madame",
    "monsieur et madame",
    "messieurs",
    "mesdames"
  )
) {
  errors.client.civilite =
    "civilite is required";
}

if (Validator.isEmpty(data.client.prenom)) {
  errors.rue = "first name is required";
}

if (Validator.isEmpty(data.client.nom)) {
  errors.rue = "last name is required";
}

if (Validator.isEmpty(data.client.email)) {
  errors.codePostal = "email is required";
}

if (Validator.isEmpty(data.client.telephone) ||
!Validator.isNumeric(data.client.telephone, { no_symbols: true })
{
  errors.client.telephone = "telephone is required";
}

///////////////////////////// end of client validation ////////////////////////////////

///////////////////////////// bienImmobillier validation ////////////////////////////////

// bienImmobillier.validation

if (
  !Validator.isLength(data.bienImmobillier.bienImmobillier.numero, { min: 1, max: 3 }) ||
  Validator.isEmpty(data.bienImmobillier.bienImmobillier.numero) ||
  !Validator.isNumeric(data.bienImmobillier.bienImmobillier.numero, { no_symbols: true })
) {
  errors.bienImmobillier.bienImmobillier.numero =
    "street number is required";
}

if (Validator.isEmpty(data.bienImmobillier.bienImmobillier.voie)) {
  errors.ville = "street name is required";
}

if (
  !Validator.isLength(data.bienImmobillier.bienImmobillier.codePostal, { min: 5, max: 5 }) ||
  Validator.isEmpty(data.bienImmobillier.bienImmobillier.codePostal) ||
  !Validator.isNumeric(data.bienImmobillier.bienImmobillier.codePostal, { no_symbols: true })
) {
  errors.bienImmobillier.bienImmobillier.codePostal =
    "code postal is required and is 5 digits and is positive";
}

if (Validator.isEmpty(data.bienImmobillier.bienImmobillier.ville)) {
  errors.bienImmobillier.bienImmobillier.ville =
    "city name is required";
}

// end of bienImmobillier.validation

// bienImmobillier informations validation

if (
  Validator.isEmpty(data.bienImmobillier.informations.anneConstruction) ||
  !Validator.isInt(data.bienImmobillier.informations.anneConstruction, { gt: 1900, lt: 2019 })
) {
  errors.bienImmobillier.informations.anneConstruction =
    "annee_construction is required and must be between 1900 and 2019";
}

if (Validator.isEmpty(data.bienImmobillier.informations.typeBienAffiche)) {
  errors.bienImmobillier.informations.typeBienAffiche =
    "number of pieces is required and must be positive";
}

if (Validator.isEmpty(data.bienImmobillier.informations.nombrePieces)) {
  errors.bienImmobillier.informations.nombrePieces =
    "number of pieces is required and must be positive";
}

if (Validator.isEmpty(data.bienImmobillier.informations.nombreChambres)) {
  errors.bienImmobillier.informations.nombreChambres =
    "number of rooms is required and must be positive";
}

if (Validator.isEmpty(data.bienImmobillier.informations.surfaceHabitable)) {
  errors.bienImmobillier.informations.surfaceHabitable =
    "habitable surface is required and must be positive";
}

if (Validator.isEmpty(data.bienImmobillier.informations.surfaceTerrain)) {
  errors.bienImmobillier.informations.surfaceTerrain =
    "ground surface is required and must be positive";
}

if (Validator.isEmpty(data.bienImmobillier.informations.nombreNiveaux)) {
  errors.bienImmobillier.informations.nombreNiveaux =
    "number of levels is required and must be positive";
}

if (Validator.isEmpty(data.bienImmobillier.informations.ascenseur)) {
  errors.bienImmobillier.informations.ascenseur =
    "elevator is required";
}

if (Validator.isEmpty(data.bienImmobillier.informations.balconOuTerrasse)) {
  errors.bienImmobillier.informations.balconOuTerrasse =
    "balcony is required";
}

if (Validator.isEmpty(data.bienImmobillier.informations.LibreALaVente)) {
  errors.bienImmobillier.informations.LibreALaVente =
    "can sell is required";
}

if (Validator.isEmpty(data.bienImmobillier.informations.titreDossier)) {
  errors.bienImmobillier.informations.titreDossier =
    "can sell is required";
}

if (Validator.isEmpty(data.bienImmobillier.informations.descriptifBien)) {
  errors.bienImmobillier.informations.descriptifBien =
    "can sell is required";
}

if (Validator.isEmpty(data.bienImmobillier.informations.DPE)) {
  errors.bienImmobillier.informations.DPE =
    "can sell is required";
}

if (Validator.isEmpty(data.bienImmobillier.informations.GES)) {
  errors.bienImmobillier.informations.GES =
    "can sell is required";
}

if (Validator.isEmpty(data.bienImmobillier.informations.PrixMandat)) {
  errors.bienImmobillier.informations.PrixMandat =
    "can sell is required";
}

// end of masion informations validation

// chargesEtImpots

if (Validator.isEmpty(data.bienImmobillier.bienImmobillier.chargesEtImpots.chargesAnnuellesTotales)) {
  errors.bienImmobillier.bienImmobillier.chargesEtImpots.chargesAnnuellesTotales =
    "annual chargesEtImpots is required";
}

if (Validator.isEmpty(data.bienImmobillier.bienImmobillier.chargesEtImpots.chargesDeCopropriete)) {
  errors.bienImmobillier.bienImmobillier.chargesEtImpots.chargesDeCopropriete =
    "coprepriete chargesEtImpots is required";
}

if (Validator.isEmpty(data.bienImmobillier.bienImmobillier.chargesEtImpots.impotsFonciers)) {
  errors.bienImmobillier.bienImmobillier.chargesEtImpots.impotsFonciers =
    "impots is required";
}

// end of chargesEtImpots

// bienImmobillier photos_plan validation


// end of bienImmobillier photos_plan validation

// bienImmobillier annexes validation


// end of bienImmobillier annexes validation

// bienImmobillier points validation


// end of bienImmobillier points validation

// bienImmobillier commentaires validation


// end of bienImmobillier commentaires validation



///////////////////////////// end of bienImmobillier validation ////////////////////////////////

///////////////////////////// caracteristiques validation ////////////////////////////////

// caracteristiques elementsPrincipaux validation

if (
  Validator.isEmpty(data.caracteristiques.elementsPrincipaux.etatQualiteGrosOeuvre) ||
  !Validator.matches(
    data.caracteristiques.elementsPrincipaux.etatQualiteGrosOeuvre,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristiques.elementsPrincipaux.etatQualiteGrosOeuvre =
    "etat is required";
}

if (
  Validator.isEmpty(data.caracteristiques.elementsPrincipaux.epoqueConstruction) ||
  !Validator.matches(
    data.caracteristiques.elementsPrincipaux.epoqueConstruction,
    'Pas recherché',
    'Peu recherché'
    'Neutre',
    'Recherché',
    'Trés recherché'
  )
) {
  errors.caracteristiques.elementsPrincipaux.epoqueConstruction =
    "epoque de contruction is required";
}

if (
  Validator.isEmpty(data.caracteristiques.elementsPrincipaux.mitoyennete) ||
  !Validator.matches(
    data.caracteristiques.elementsPrincipaux.mitoyennete,
    '3 cotés',
    '2 cotés'
    '1 cotés',
    'Pas de dependance',
    'Maison independante'
  )
) {
  errors.caracteristiques.elementsPrincipaux.mitoyennete =
    "mitoyennete is required";
}

if (
  Validator.isEmpty(data.caracteristiques.elementsPrincipaux.agrementGeneral) ||
  !Validator.matches(
    data.caracteristiques.elementsPrincipaux.agrementGeneral,
    'Tres desagreable',
    'Desagreable'
    'Moyen',
    'Agreable',
    'Tres agreable'
  )
) {
  errors.caracteristiques.elementsPrincipaux.agrementGeneral =
    "general agreement is required";
}

if (
  Validator.isEmpty(data.caracteristiques.elementsPrincipaux.standing) ||
  !Validator.matches(
    data.caracteristiques.elementsPrincipaux.standing,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristiques.elementsPrincipaux.standing =
    "standing is required";
}

if (
  Validator.isEmpty(data.caracteristiques.elementsPrincipaux.accessibilite) ||
  !Validator.matches(
    data.caracteristiques.elementsPrincipaux.accessibilite,
    'Trés difficile',
    'Difficile'
    'Normal',
    'Facile',
    'Tres facile'
  )
) {
  errors.caracteristiques.elementsPrincipaux.accessibilite =
    "accessibilité is required";
}

if (
  Validator.isEmpty(data.caracteristiques.elementsPrincipaux.toutAEgout) ||
  !Validator.matches(
    data.caracteristiques.elementsPrincipaux.toutAEgout,
    'Rien',
    'A revoir'
    'Assainissement individuel',
    'Partiel',
    'Complet'
  )
) {
  errors.caracteristiques.elementsPrincipaux.toutAEgout =
    "tout a l'egout is required";
}

// end of caracteristiques elementsPrincipaux validation

// caracteristiques autresElements validation

if (
  Validator.isEmpty(data.caracteristiques.autresElements.qualiteArchitecturale) ||
  !Validator.matches(
    data.caracteristiques.autresElements.qualiteArchitecturale,
    'Mauvaise',
    'Mediocore',
    'Moyenne',
    'Bonne',
    'Tres bonne'
  )
) {
  errors.caracteristiques.autresElements.qualiteArchitecturale =
    "Qualite architecturale is required";
}

if (
  Validator.isEmpty(data.caracteristiques.autresElements.etatPortesEtFenetres) ||
  !Validator.matches(
    data.caracteristiques.autresElements.etatPortesEtFenetres,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristiques.autresElements.etatPortesEtFenetres =
    "etat des portes et fenetres is required";
}

if (
  Validator.isEmpty(data.caracteristiques.autresElements.etatDesToitures) ||
  !Validator.matches(
    data.caracteristiques.autresElements.etatDesToitures,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristiques.autresElements.etatDesToitures =
    "etat des toitures is required";
}

if (
  Validator.isEmpty(data.caracteristiques.autresElements.clotureTerrain) ||
  !Validator.matches(
    data.caracteristiques.autresElements.clotureTerrain,
    'Aucun/Mauvais',
    'Mediocore',
    'Moyen',
    'Bon'
  )
) {
  errors.caracteristiques.autresElements.clotureTerrain =
    "Cloture terrain is required";
}
// end of caracteristiques autresElements validation

// caracteristiques environnement validation

if (
  Validator.isEmpty(data.caracteristiques.environnement.nuissanceSonore) ||
  !Validator.matches(
    data.caracteristiques.environnement.nuissanceSonore,
    'Tres bruyant',
    'Bruyant'
    'Normal',
    'Calme'
  )
) {
  errors.caracteristiques.environnement.nuissanceSonore =
    "Qualite architecturale is required";
}

if (
  Validator.isEmpty(data.caracteristiques.environnement.voisinage) ||
  !Validator.matches(
    data.caracteristiques.environnement.voisinage,
    'Tres genant',
    'Bruyant'
    'Normal',
    'Discret',
    'Aucun'
  )
) {
  errors.caracteristiques.environnement.voisinage =
    "Qualite architecturale is required";
}

if (
  Validator.isEmpty(data.caracteristiques.environnement.qualiteEnvironnement) ||
  !Validator.matches(
    data.caracteristiques.environnement.qualiteEnvironnement,
    'Mauvaise',
    'Mediocore',
    'Moyenne',
    'Bonne',
    'Tres bonne'
  )
) {
  errors.caracteristiques.environnement.qualiteEnvironnement =
    "Qualite architecturale is required";
}

if (
  Validator.isEmpty(data.caracteristiques.environnement.proximiteServicesPublics) ||
  !Validator.matches(
    data.caracteristiques.environnement.proximiteServicesPublics,
    'Tres eloignes',
    'Assez eloignes'
    'Normales',
    'Proches',
    'Tres proches'
  )
) {
  errors.caracteristiques.environnement.proximiteServicesPublics =
    "Qualite architecturale is required";
}

// end of caracteristiques environnement validation

// caracteristiques criteresGeneraux validation

if (
  Validator.isEmpty(data.caracteristiques.criteresGeneraux.qualiteDistribution) ||
  !Validator.matches(
    data.caracteristiques.criteresGeneraux.qualiteDistribution,
    'Mauvaise',
    'Mediocore',
    'Moyenne',
    'Bonne'
  )
) {
  errors.caracteristiques.criteresGeneraux.qualiteDistribution =
    "qualiteDistribution is required";
}

if (
  Validator.isEmpty(data.caracteristiques.criteresGeneraux.etatMursPlafonds) ||
  !Validator.matches(
    data.caracteristiques.criteresGeneraux.etatMursPlafonds,
    'A refaire',
    'Usage'
    'Moyen',
    'Recent',
    'Neuf'
  )
) {
  errors.caracteristiques.criteresGeneraux.etatMursPlafonds =
    "etatMursPlafonds is required";
}

if (
  Validator.isEmpty(data.caracteristiques.criteresGeneraux.solsEtRevetementSols) ||
  !Validator.matches(
    data.caracteristiques.criteresGeneraux.solsEtRevetementSols,
    'A refaire',
    'Mediocore',
    'Convenable',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristiques.criteresGeneraux.solsEtRevetementSols =
    "solsEtRevetementSols is required";
}

// end of caracteristiques criteresGeneraux validation

// caracteristiques sejour validation

if (
  Validator.isEmpty(data.caracteristiques.sejour.tailleSejour) ||
  !Validator.matches(
    data.caracteristiques.sejour.tailleSejour,
    'Tres petit',
    'Petit'
    'Normal',
    'Grand',
    'Tres grand'
  )
) {
  errors.caracteristiques.sejour.tailleSejour =
    "tailleSejour is required";
}

if (
  Validator.isEmpty(data.caracteristiques.sejour.expositionSejour) ||
  !Validator.matches(
    data.caracteristiques.sejour.expositionSejour,
    'Mauvaise',
    'Mediocore',
    'Moyenne',
    'Bonne',
    'Tres bonne'
  )
) {
  errors.caracteristiques.sejour.expositionSejour =
    "exposition is required";
}

if (
  Validator.isEmpty(data.caracteristiques.sejour.vueSejour) ||
  !Validator.matches(
    data.caracteristiques.sejour.vueSejour,
    'Vus-a-vis proche',
    'Mediocore',
    'Ordinaire',
    'Belle',
    'Exceptionnelle'
  )
) {
  errors.caracteristiques.sejour.vueSejour =
    "vue is required";
}

if (
  Validator.isEmpty(data.caracteristiques.sejour.luminosite) ||
  !Validator.matches(
    data.caracteristiques.sejour.luminosite,
    'Mauvaise',
    'Mediocore',
    'Simple',
    'Belle',
    'Tres bonne'
  )
) {
  errors.caracteristiques.sejour.luminosite =
    "lumonisite is required";
}

if (
  Validator.isEmpty(data.caracteristiques.sejour.cheminee) ||
  !Validator.matches(
    data.caracteristiques.sejour.cheminee,
    'Inexistante',
    'Mediocore',
    'Simple',
    'Belle',
    'Exceptionnelle'
  )
) {
  errors.caracteristiques.sejour.cheminee =
    "cheminee is required";
}

// end of caracteristiques sejour validation

// caracteristiques cuisine validation

if (
  Validator.isEmpty(data.caracteristiques.cuisine.taille) ||
  !Validator.matches(
    data.caracteristiques.cuisine.taille,
    'Tres petite',
    'Petite'
    'Normale',
    'Grande',
    'Tres grande'
  )
) {
  errors.caracteristiques.cuisine.taille =
    "taille is required";
}

if (
  Validator.isEmpty(data.caracteristiques.cuisine.equipement) ||
  !Validator.matches(
    data.caracteristiques.cuisine.equipement,
    'Inexistant',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristiques.cuisine.equipement =
    "equipement is required";
}

if (
  Validator.isEmpty(data.caracteristiques.cuisine.etatGeneral) ||
  !Validator.matches(
    data.caracteristiques.cuisine.etatGeneral,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristiques.cuisine.etatGeneral =
    "etatGeneral is required";
}

if (
  Validator.isEmpty(data.caracteristiques.cuisine.agrement) ||
  !Validator.matches(
    data.caracteristiques.cuisine.agrement,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristiques.cuisine.agrement =
    "agrement is required";
}

// end of caracteristiques cuisine validation

// caracteristiques chambres validation

if (
  Validator.isEmpty(data.caracteristiques.chambres.tailleDesPieces) ||
  !Validator.matches(
    data.caracteristiques.chambres.tailleDesPieces,
    'Tres petite',
    'Petite'
    'Normale',
    'Grande',
    'Tres grande'
  )
) {
  errors.caracteristiques.chambres.tailleDesPieces =
    "agrement is required";
}

if (
  Validator.isEmpty(data.caracteristiques.chambres.etatDesPieces) ||
  !Validator.matches(
    data.caracteristiques.chambres.etatDesPieces,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristiques.chambres.etatDesPieces =
    "etatDesPieces is required";
}

if (
  Validator.isEmpty(data.caracteristiques.chambres.expositionAuxBruits) ||
  !Validator.matches(
    data.caracteristiques.chambres.expositionAuxBruits,
    'Tres bruyante',
    'Bruyante'
    'Moyenne',
    'Faible',
    'Tres faible'
  )
) {
  errors.caracteristiques.chambres.expositionAuxBruits =
    "expositionAuxBruits is required";
}

// end of caracteristiques chambres validation

// caracteristiques sanitaires validation

if (
  Validator.isEmpty(data.caracteristiques.sanitaires.taillePiecesSanitaires) ||
  !Validator.matches(
    data.caracteristiques.sanitaires.taillePiecesSanitaires,
    'Tres petite',
    'Petite'
    'Normale',
    'Grande',
    'Tres grande'
  )
) {
  errors.caracteristiques.sanitaires.taillePiecesSanitaires =
    "taille is required";
}

if (
  Validator.isEmpty(data.caracteristiques.sanitaires.nombreDeSanitaires) ||
  !Validator.matches(
    data.caracteristiques.sanitaires.nombreDeSanitaires,
    'Inexistant',
    'Insuffisant'
    'Normal',
    'Eleve',
    'Tres eleve'
  )
) {
  errors.caracteristiques.sanitaires.nombreDeSanitaires =
    "nombre is required";
}

if (
  Validator.isEmpty(data.caracteristiques.sanitaires.qualiteEtatSanitairesfactureEnergetique) ||
  !Validator.matches(
    data.caracteristiques.sanitaires.qualiteEtatSanitairesfactureEnergetique,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristiques.sanitaires.qualiteEtatSanitairesfactureEnergetique =
    "qualite is required";
}

// end of caracteristiques sanitaires validation

// caracteristiques energie validation

if (
  Validator.isEmpty(data.caracteristiques.energie.factureEnergetique) ||
  !Validator.matches(
    data.caracteristiques.energie.factureEnergetique,
    'Tres Elevee',
    'Elevee'
    'Moyenne',
    'Faible',
    'Tres faible'
  )
) {
  errors.caracteristiques.energie.factureEnergetique =
    "factureEnergetique is required";
}

if (
  Validator.isEmpty(data.caracteristiques.energie.installationElectriqueinstallationGaz) ||
  !Validator.matches(
    data.caracteristiques.energie.installationElectriqueinstallationGaz,
    'Mauvaise',
    'Mediocore',
    'Moyenne',
    'Bonne',
    'Tres bonne'
  )
) {
  errors.caracteristiques.energie.installationElectriqueinstallationGaz =
    "installation_electrique is required";
}

if (
  Validator.isEmpty(data.caracteristiques.energie.installationGaz) ||
  !Validator.matches(
    data.caracteristiques.energie.installationGaz,
    'Mauvaise',
    'Mediocore',
    'Moyenne',
    'Bonne',
    'Tres bonne'
  )
) {
  errors.caracteristiques.energie.installationGaz =
    "installation_gaz is required";
}

// end of caracteristiques energie validation

// caracteristiques annexes validation

if (
  Validator.isEmpty(data.caracteristiques.annexes.balconLogiaTerasse) ||
  !Validator.matches(
    data.caracteristiques.annexes.balconLogiaTerasse,
    'Aucun/Mediocore',
    'moyen',
    'Bien',
    'Tres bien'
  )
) {
  errors.caracteristiques.annexes.balconLogiaTerasse =
    "balcon is required";
}

if (
  Validator.isEmpty(data.caracteristiques.annexes.caveSousSol) ||
  !Validator.matches(
    data.caracteristiques.annexes.caveSousSol,
    'Aucun',
    'Mediocore',
    'Moyen',
    'Bien',
    'Exceptionnel'
  )
) {
  errors.caracteristiques.annexes.caveSousSol =
    "cave is required";
}

if (
  Validator.isEmpty(data.caracteristiques.annexes.agrementJardin) ||
  !Validator.matches(
    data.caracteristiques.annexes.agrementJardin,
    'Tres medicore',
    'Mediocore',
    'Aucun/Moyen',
    'Bien',
    'Remarquable'
  )
) {
  errors.caracteristiques.annexes.agrementJardin =
    "agrementJardin is required";
}

if (
  Validator.isEmpty(data.caracteristiques.annexes.garageOuParkingOuvert) ||
  !Validator.matches(
    data.caracteristiques.annexes.garageOuParkingOuvert,
    'Sans',
    'Mediocore',
    'Moyen',
    'Bien',
    'Exceptionnel'
  )
) {
  errors.caracteristiques.annexes.garageOuParkingOuvert =
    "garageOuParkingOuvert is required";
}

if (
  Validator.isEmpty(data.caracteristiques.annexes.comble) ||
  !Validator.matches(
    data.caracteristiques.annexes.comble,
    'Aucune/Peu',
    'Moyenne',
    'Bonne',
    'Exceptionnelle'
  )
) {
  errors.caracteristiques.annexes.comble =
    "comble is required";
}

// end of caracteristiques annexes validation



///////////////////////////// end of caracteristiques validation ////////////////////////////////

///////////////////////////// estimation validation ////////////////////////////////


///////////////////////////// end of estimation validation ////////////////////////////////



// end of required fields validation

return {
  errors,
  isValid: isEmpty(errors)
};
};
