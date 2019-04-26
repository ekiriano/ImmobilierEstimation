const Validator = require("validator");
const isEmpty = require("./is-empty");

/**
 * @todo write all validation rules for house
 *
 * @todo In the futur : adress validation must be done by mapbox api and therefore will fill the coordianate fields when submited using geocoding
 *
 * @todo Add Types [Condo , Dupley , Triplex,Loft] In Appartment Model
 */

 module.exports = function validateSuperBienInput(data) {
   let errors = {};


// required fields validation

///////////////////////////// client validation ////////////////////////////////

if (Validator.isEmpty(data.civilite)) {
  errors.civilite =
    "Civilite is required";
}

if(!data.civilite.match(/[^0-9]/)){
    errors.civilite="civilite ne correspond pas au bon format!";
  }

// if(!Validator.matches(
//     data.civilite,
//     "Aucun",
//     "Monsieur",
//     "Madame",
//     "Monsieur et madame",
//     "Messieurs",
//     "Mesdames"
//   )) {
//     errors.civilite = "civilite doesn't match !"
//   }

if (Validator.isEmpty(data.prenom)) {
  errors.prenom = "Prenom is required";
}

if(!data.prenom.match(/[^0-9]/)){
    errors.prenom="prenom ne correspond pas au bon format!";
  }

if (Validator.isEmpty(data.nom)) {
  errors.nom = "Last name is required";
}

if(!data.nom.match(/[^0-9]/)){
    errors.nom="nom ne correspond pas au bon format!";
  }

if (Validator.isEmpty(data.adressePostale)) {
  errors.adressePostale = "Adresse postale is required";
}

if(!data.adressePostale.match(/[^0-9]/)){
    errors.adressePostale="adressePostale ne correspond pas au bon format!";
  }

if (Validator.isEmpty(data.email)) {
  errors.email = "Email is required";
}

if(!data.email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)){
    errors.email="email ne correspond pas au bon format!";
  }


if (Validator.isEmpty(data.telephone)){
  errors.telephone = "Telephone is required";
}

if(data.telephone<0){
    errors.telephone="telephone ne correspond pas au bon format!";
  }



// if (!Validator.isNumeric(data.telephone, { no_symbols: true }))
// {
//   errors.telephone = "telephone is required";
// }

///////////////////////////// end of client validation ////////////////////////////////

///////////////////////////// bienImmobillier validation ////////////////////////////////

// bienImmobillier.validation

// if (
//   !Validator.isLength(data.numero, { min: 1, max: 3 })
// ) {
//   errors.numero =
//     "street number is length";
// }

// if(!Validator.isNumeric(data.numero, { no_symbols: true })){
//   errors.numero =
//     "street number is no symbol";
// }
//
if (Validator.isEmpty(data.voie)) {
  errors.voie = "rue is required";
}

 

if(Validator.isEmpty(data.codePostal)){
  errors.codePostal =
    "code postal is required";
}

if(data.codePostal<0){
    errors.codePostal="codePostal doit etre un chiffre positive";
  }


//
// // if (!Validator.isLength(data.codePostal, { min: 5, max: 5 })
// // ) {
// //   errors.codePostal =
// //     "code postal is required and is 5 digits";
// // }
// //
// // if(!Validator.isNumeric(data.codePostal, { no_symbols: true })){
// //   errors.codePostal =
// //     "street number is no symbol";
// // }
//
if (Validator.isEmpty(data.ville)) {
  errors.ville =
    "city name is required";
}

if(!data.ville.match(/^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/)){
    errors.ville="ville ne correspond pas au bon format!";
  }
//
// // end of bienImmobillier.validation
//
// // bienImmobillier informations validation
//
// // if (!Validator.isInt(data.anneeConstruction, { gt: 1900, lt: 2019 })) {
// //   errors.anneeConstruction =
// //     "annee_construction is required and must be between 1900 and 2019";
// // }
//
if(Validator.isEmpty(data.anneeConstruction)){
  errors.anneeConstruction = "is required";
}

if(data.anneeConstruction<0){
    errors.anneeConstruction="anneeConstruction doit etre un chiffre positive";
  }



//
if (Validator.isEmpty(data.typeBienAffiche)) {
  errors.typeBienAffiche =
    "Année de construction is required";
}

if(!data.typeBienAffiche.match(/[^0-9]/)){
    errors.typeBienAffiche="typeBienAffiche ne correspond pas au bon format!";
  }
//
if (Validator.isEmpty(data.nombrePieces)) {
  errors.nombrePieces =
    "number of pieces is required and must be positive";
}

if(data.nombrePieces<0){
    errors.nombrePieces="nombrePieces doit etre un chiffre positive";
  }
//
if (Validator.isEmpty(data.nombreChambres)) {
  errors.nombreChambres =
    "number of rooms is required and must be positive";
}

if(data.nombreChambres<0){
    errors.nombreChambres="nombreChambres doit etre un chiffre positive";
  }
//
if (Validator.isEmpty(data.surfaceHabitable)) {
  errors.surfaceHabitable =
    "habitable surface is required and must be positive";
}

if(data.surfaceHabitable<0){
    errors.surfaceHabitable="surfaceHabitable doit etre un chiffre positive";
  }
if (Validator.isEmpty(data.valeurLocative)) {
  errors.valeurLocative =
    "Valeur locative is required and must be positive";
}

if(data.valeurLocative<0){
    errors.valeurLocative="valeurLocative doit etre un chiffre positive";
  }
//
if (Validator.isEmpty(data.surfaceTerrain)) {
  errors.surfaceTerrain =
    "ground surface is required and must be positive";
}

if(data.surfaceTerrain<0){
    errors.surfaceTerrain="surfaceTerrain doit etre un chiffre positive";
  }
//
if (Validator.isEmpty(data.nombreNiveaux)) {
  errors.nombreNiveaux =
    "number of levels is required and must be positive";
}

if(data.nombreNiveaux<0){
    errors.nombreNiveaux="nombreNiveaux doit etre un chiffre positive";
  }
//
if (Validator.isEmpty(data.ascenseur)) {
  errors.ascenseur =
    "elevator is required";
}

if(!data.ascenseur.match(/[^0-9]/)){
    errors.ascenseur="ascenseur ne correspond pas au bon format!";
  }
//
if (Validator.isEmpty(data.balconOuTerrasse)) {
  errors.balconOuTerrasse =
    "balcony is required";
}

if(!data.balconOuTerrasse.match(/[^0-9]/)){
    errors.balconOuTerrasse="balconOuTerrasse ne correspond pas au bon format!";
  }
//
if (Validator.isEmpty(data.LibreALaVente)) {
  errors.LibreALaVente =
    "Libre a la vente is required";
}

if(!data.LibreALaVente.match(/[^0-9]/)){
    errors.LibreALaVente="LibreALaVente ne correspond pas au bon format!";
  }
//
if (Validator.isEmpty(data.titreDossier)) {
  errors.titreDossier =
    "Titre du dossier is required";
}

if(!data.titreDossier.match(/[^0-9]/)){
    errors.titreDossier="titreDossier ne correspond pas au bon format!";
  }
//
if (Validator.isEmpty(data.descriptifBien)) {
  errors.descriptifBien =
    "Descriptif du bien is required";
}

if(!data.descriptifBien.match(/[^0-9]/)){
    errors.descriptifBien="descriptifBien ne correspond pas au bon format!";
  }
//
// // if (!Validator.matches(
// //   data.DPE,
// //   'A++',
// //   'B',
// //   'C',
// //   'D',
// //   'E',
// //   'F'
// // )
// // ) {
// // errors.DPE =
// //   "DPE is required";
// // }
//
if(Validator.isEmpty(data.DPE)){
  errors.DPE = " DPE is required"
}

if(!data.DPE.match(/[^0-9]/)){
    errors.DPE="DPE ne correspond pas au bon format!";
  }
//
//
// // if (!Validator.matches(
// //   data.GES,
// //   'A',
// //   'B',
// //   'C',
// //   'D',
// //   'E',
// //   'F'
// // )
// // ) {
// // errors.GES =
// //   "GES is required";
// // }
//
if(Validator.isEmpty(data.GES)){
  errors.GES = "GES is required"
}

if(!data.GES.match(/[^0-9]/)){
    errors.GES="GES ne correspond pas au bon format!";
  }
//
if (Validator.isEmpty(data.prixMandat)) {
  errors.prixMandat =
    "Prix Mandat is required";
}

if(data.prixMandat<0){
    errors.prixMandat="prixMandat doit etre un chiffre positive";
  }
//
// // end of masion informations validation
//
// // chargesEtImpots
//
if (Validator.isEmpty(data.chargesAnnuellesTotales)) {
  errors.chargesAnnuellesTotales =
    "annual chargesEtImpots is required";
}
if(data.chargesAnnuellesTotales<0){
    errors.chargesAnnuellesTotales="chargesAnnuellesTotales doit etre un chiffre positive";
  }
//
if (Validator.isEmpty(data.chargesDeCopropriete)) {
  errors.chargesDeCopropriete =
    "coprepriete chargesEtImpots is required";
}

if(data.chargesDeCopropriete<0){
    errors.chargesDeCopropriete="chargesDeCopropriete doit etre un chiffre positive";
  }
//
if (Validator.isEmpty(data.impotsFonciers)) {
  errors.impotsFonciers =
    "impots is required";
}

if(data.impotsFonciers<0){
    errors.impotsFonciers="impotsFonciers doit etre un chiffre positive";
  }
//
// // end of chargesEtImpots
//
// // bienImmobillier photos_plan validation
//
//
// // end of bienImmobillier photos_plan validation
//
// // bienImmobillier annexes validation
if (Validator.isEmpty(data.annexes)) {
  errors.annexes =
    "annexes is required";
}

 if(!data.annexes.match(/[^0-9]/)){
    errors.annexes="annexes ne correspond pas au bon format!";
  }
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
// // if (!Validator.matches(
// //     data.etatQualiteGrosOeuvre,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.etatQualiteGrosOeuvre =
// //     "etat is required";
// // }
//
if(  Validator.isEmpty(data.etatQualiteGrosOeuvre)){
  errors.etatQualiteGrosOeuvre = "Etat et qualite Gros Oeuvre is required";
}

 if(!data.etatQualiteGrosOeuvre.match(/[^0-9]/)){
    errors.etatQualiteGrosOeuvre="etatQualiteGrosOeuvre ne correspond pas au bon format!";
  }
//
// // if (!Validator.matches(
// //     data.epoqueConstruction,
// //     'Pas recherché',
// //     'Peu recherché',
// //     'Neutre',
// //     'Recherché',
// //     'Trés recherché'
// //   )
// // ) {
// //   errors.epoqueConstruction =
// //     "epoque de contruction is required";
// // }
//
if(Validator.isEmpty(data.epoqueConstruction)){
  errors.epoqueConstruction = "Epoque de construction is required";
}

 if(!data.epoqueConstruction.match(/[^0-9]/)){
    errors.epoqueConstruction="epoqueConstruction ne correspond pas au bon format!";
  }
//
// // if (
// //
// //   !Validator.matches(
// //     data.mitoyennete,
// //     '3 côtés',
// //     '2 côtés',
// //     '1 côtés',
// //     'Par dependance',
// //     'Maison independante'
// //   )
// // ) {
// //   errors.mitoyennete =
// //     "mitoyennete is required";
// // }
//
if(Validator.isEmpty(data.mitoyennete)){
  errors.mitoyennete = "Mitoyennete is required";
}

 if(!data.mitoyennete.match(/[^0-9]/)){
    errors.mitoyennete="mitoyennete ne correspond pas au bon format!";
  }
//
// // if (!Validator.matches(
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
if(Validator.isEmpty(data.agrementGeneral)){
  errors.agrementGeneral = "Agrement Général is required";
}

 if(!data.agrementGeneral.match(/[^0-9]/)){
    errors.agrementGeneral="agrementGeneral ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.standing,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.standing =
// //     "standing is required";
// // }
//
if(Validator.isEmpty(data.standing)){
  errors.standing = "Standing is required"
}

 if(!data.standing.match(/[^0-9]/)){
    errors.standing="standing ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.accessibilite,
// //     'Trés difficile',
// //     'Difficile',
// //     'Normal',
// //     'Facile',
// //     'Trés facile'
// //   )
// // ) {
// //   errors.accessibilite =
// //     "accessibilité is required";
// // }
//
if(Validator.isEmpty(data.accessibilite)){
  errors.accessibilite = "Accéssibilité is required";
}

 if(!data.accessibilite.match(/[^0-9]/)){
    errors.accessibilite="accessibilite ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.toutAEgout,
// //     'Rien',
// //     'A revoir',
// //     'Assainissement individuel',
// //     'Partiel',
// //     'Complet'
// //   )
// // ) {
// //   errors.toutAEgout =
// //     "tout a l'egout is required";
// // }
//
if(Validator.isEmpty(data.toutAEgout)){
  errors.toutAEgout = "Tout a l'égout is required";
}

 if(!data.toutAEgout.match(/[^0-9]/)){
    errors.toutAEgout="toutAEgout ne correspond pas au bon format!";
  }
//
// // end of caracteristiques elementsPrincipaux validation
//
// // caracteristiques autresElements validation
//
// // if (
// //   !Validator.matches(
// //     data.qualiteArchitecturale,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.qualiteArchitecturale =
// //     "Qualite architecturale is required";
// // }
//
if(Validator.isEmpty(data.qualiteArchitecturale)){
  errors.qualiteArchitecturale = "Qualité architecturale is required";
}

 if(!data.qualiteArchitecturale.match(/[^0-9]/)){
    errors.qualiteArchitecturale="qualiteArchitecturale ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.etatPortesEtFenetres,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.etatPortesEtFenetres =
// //     "etat des portes et fenetres is required";
// // }
//
if(Validator.isEmpty(data.etatPortesEtFenetres)){
  errors.etatPortesEtFenetres = "Etat des portes et fenetres is required";
}
 if(!data.etatPortesEtFenetres.match(/[^0-9]/)){
    errors.etatPortesEtFenetres="etatPortesEtFenetres ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.etatDesToitures,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.etatDesToitures =
// //     "etat des toitures is required";
// // }
//
if(Validator.isEmpty(data.etatDesToitures)){
  errors.etatDesToitures = "Etat des toitures is required";
}

 if(!data.etatDesToitures.match(/[^0-9]/)){
    errors.etatDesToitures="etatDesToitures ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.clotureTerrain,
// //     'Aucun/Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon'
// //   )
// // ) {
// //   errors.clotureTerrain =
// //     "Cloture terrain is required";
// // }
//
if(Validator.isEmpty(data.clotureTerrain)){
  errors.clotureTerrain = "Cloture du terrain is required";
}

 if(!data.clotureTerrain.match(/[^0-9]/)){
    errors.clotureTerrain="clotureTerrain ne correspond pas au bon format!";
  }

if(Validator.isEmpty(data.tauxCapitalisation)){
  errors.tauxCapitalisation = "Taux de capitalisation is required";
}

if(data.tauxCapitalisation<0){
    errors.tauxCapitalisation="tauxCapitalisation doit etre un chiffre positive";
  }
// // end of caracteristiques autresElements validation
//
// // caracteristiques environnement validation
//
// // if (
// //   !Validator.matches(
// //     data.nuissanceSonore,
// //     'Trés bruyant',
// //     'Bruyant',
// //     'Normal',
// //     'Calme'
// //   )
// // ) {
// //   errors.nuissanceSonore =
// //     "Qualite architecturale is required";
// // }
//
if(Validator.isEmpty(data.nuissanceSonore)){
  errors.nuissanceSonore = "Nuissance sonore is required";
}

 if(!data.nuissanceSonore.match(/[^0-9]/)){
    errors.nuissanceSonore="nuissanceSonore ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.voisinageVisaVis,
// //     'Trés gênant',
// //     'Gênant',
// //     'Normal',
// //     'Calme',
// //     'Aucun'
// //   )
// // ) {
// //   errors.voisinageVisaVis =
// //     "Qualite architecturale is required";
// // }
//
if(Validator.isEmpty(data.voisinageVisaVis)){
  errors.voisinageVisaVis = "Le voisinage vis-à-vis is required";
}
 if(!data.voisinageVisaVis.match(/[^0-9]/)){
    errors.voisinageVisaVis="voisinageVisaVis ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.qualiteEnvironnement,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.qualiteEnvironnement =
// //     "Qualite architecturale is required";
// // }
//
if(Validator.isEmpty(data.qualiteEnvironnement)){
  errors.qualiteEnvironnement = "Qualité de l'environnement is required"
}
 if(!data.qualiteEnvironnement.match(/[^0-9]/)){
    errors.qualiteEnvironnement="qualiteEnvironnement ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.proximiteServicesPublics,
// //     'Trés éloignés',
// //     'Assez éloignés',
// //     'Normales',
// //     'Proches',
// //     'Trés proches'
// //   )
// // ) {
// //   errors.proximiteServicesPublics =
// //     "Qualite architecturale is required";
// // }
//
if(Validator.isEmpty(data.proximiteServicesPublics)){
  errors.proximiteServicesPublics = "Proximité des services publiques is required";
}

 if(!data.proximiteServicesPublics.match(/[^0-9]/)){
    errors.proximiteServicesPublics="proximiteServicesPublics ne correspond pas au bon format!";
  }
//
// // end of caracteristiques environnement validation
//
// // caracteristiques criteresGeneraux validation
//
// // if (
// //   !Validator.matches(
// //     data.qualiteDistribution,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne'
// //   )
// // ) {
// //   errors.qualiteDistribution =
// //     "qualiteDistribution is required";
// // }
//
if(Validator.isEmpty(data.qualiteDistribution)){
  errors.qualiteDistribution = "Qualité de distribution is required";
}

 if(!data.qualiteDistribution.match(/[^0-9]/)){
    errors.qualiteDistribution="qualiteDistribution ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.etatMursPlafonds,
// //     'A refaire',
// //     'Usagé',
// //     'Moyen',
// //     'Récent',
// //     'Neuf'
// //   )
// // ) {
// //   errors.etatMursPlafonds =
// //     "etatMursPlafonds is required";
// // }
//
if(Validator.isEmpty(data.etatMursPlafonds)){
  errors.etatMursPlafonds = "Etat des murs et plafonds is required";
}

 if(!data.etatMursPlafonds.match(/[^0-9]/)){
    errors.etatMursPlafonds="etatMursPlafonds ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.solsEtRevetementSols,
// //     'A refaire',
// //     'Médiocre',
// //     'Convenable',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.solsEtRevetementSols =
// //     "solsEtRevetementSols is required";
// // }
//
if(Validator.isEmpty(data.solsEtRevetementSols)){
  errors.solsEtRevetementSols = "Sols et revetement du sols is required";
}

 if(!data.solsEtRevetementSols.match(/[^0-9]/)){
    errors.solsEtRevetementSols="solsEtRevetementSols ne correspond pas au bon format!";
  }
//
// // end of caracteristiques criteresGeneraux validation
//
// // caracteristiques sejour validation
//
// // if (
// //   !Validator.matches(
// //     data.tailleSejour,
// //     'Trés petit',
// //     'Petit',
// //     'Normal',
// //     'Grand',
// //     'Trés grand'
// //   )
// // ) {
// //   errors.tailleSejour =
// //     "tailleSejour is required";
// // }
//
if(Validator.isEmpty(data.tailleSejour)){
  errors.tailleSejour = "La taille du séjour is required";
}

 if(!data.tailleSejour.match(/[^0-9]/)){
    errors.tailleSejour="tailleSejour ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.expositionSejour,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.expositionSejour =
// //     "exposition is required";
// // }
//
if(  Validator.isEmpty(data.expositionSejour)){
  errors.expositionSejour = "L'exposition du séjour is required"
}

 if(!data.expositionSejour.match(/[^0-9]/)){
    errors.expositionSejour="expositionSejour ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.vueSejour,
// //     'VisAVis/Proche',
// //     'Médiocre',
// //     'Ordinaire',
// //     'Belle',
// //     'Exceptionnelle'
// //   )
// // ) {
// //   errors.vueSejour =
// //     "vue is required";
// // }
//
if(Validator.isEmpty(data.vueSejour)){
  errors.vueSejour = "La vue du séjour is required";
}

 if(!data.vueSejour.match(/[^0-9]/)){
    errors.vueSejour="vueSejour ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.luminosite,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Simple',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.luminosite =
// //     "lumonisite is required";
// // }
//
if(Validator.isEmpty(data.luminosite)){
  errors.luminosite  = "Luminosité is required";
}

 if(!data.luminosite.match(/[^0-9]/)){
    errors.luminosite="luminosite ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.cheminee,
// //     'Inexistante',
// //     'Médiocre',
// //     'Simple',
// //     'Belle',
// //     'Exceptionnelle'
// //   )
// // ) {
// //   errors.cheminee =
// //     "cheminee is required";
// // }
//
if(  Validator.isEmpty(data.cheminee)){
  errors.cheminee = "Cheminée is required";
}

 if(!data.cheminee.match(/[^0-9]/)){
    errors.cheminee="cheminee ne correspond pas au bon format!";
  }
//
// // end of caracteristiques sejour validation
//
// // caracteristiques cuisine validation
//
// // if (
// //   !Validator.matches(
// //     data.taille,
// //     'Trés petite',
// //     'Petite',
// //     'Normale',
// //     'Grande',
// //     'Trés grande'
// //   )
// // ) {
// //   errors.taille =
// //     "taille is required";
// // }
//
if(Validator.isEmpty(data.taille)){
  errors.taille = "La taille de la cuisine is required";
}

 if(!data.taille.match(/[^0-9]/)){
    errors.taille="taille ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.equipement,
// //     'Inexistant',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.equipement =
// //     "equipement is required";
// // }
//
if(Validator.isEmpty(data.equipement)){
  errors.equipement = "L'equipement de la cuisine is required";
}

 if(!data.equipement.match(/[^0-9]/)){
    errors.equipement="equipement ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.etatGeneral,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.etatGeneral =
// //     "etatGeneral is required";
// // }
//
if(Validator.isEmpty(data.etatGeneral)){
  errors.etatGeneral = "L'etat général is required";
}

 if(!data.etatGeneral.match(/[^0-9]/)){
    errors.etatGeneral="etatGeneral ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.agrement,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Agreable',
// //     'Trés agreable'
// //   )
// // ) {
// //   errors.agrement =
// //     "agrement is required";
// // }
//
if(Validator.isEmpty(data.agrement)){
  errors.agrement = "L'agrément is required";
}

 if(!data.agrement.match(/[^0-9]/)){
    errors.agrement="agrement ne correspond pas au bon format!";
  }
//
// // end of caracteristiques cuisine validation
//
// // caracteristiques chambres validation
//
// // if (
// //   !Validator.matches(
// //     data.tailleDesPieces,
// //     'Trés petite',
// //     'Petite',
// //     'Normale',
// //     'Grande',
// //     'Trés grande'
// //   )
// // ) {
// //   errors.tailleDesPieces =
// //     "agrement is required";
// // }
//
if(Validator.isEmpty(data.tailleDesPieces)){
  errors.tailleDesPieces = "La taille des pièces is required";
}

 if(!data.tailleDesPieces.match(/[^0-9]/)){
    errors.tailleDesPieces="tailleDesPieces ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.etatDesPieces,
// //     'Mauvais',
// //     'Médiocre',
// //     'Moyen',
// //     'Bon',
// //     'Trés bon'
// //   )
// // ) {
// //   errors.etatDesPieces =
// //     "etatDesPieces is required";
// // }
//
if(Validator.isEmpty(data.etatDesPieces)){
  errors.etatDesPieces = "L'etat des pièces is required";
}

 if(!data.etatDesPieces.match(/[^0-9]/)){
    errors.etatDesPieces="etatDesPieces ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.expositionAuxBruits,
// //     'Trés bruyante',
// //     'Bruyante',
// //     'Moyenne',
// //     'Faible',
// //     'Trés faible'
// //   )
// // ) {
// //   errors.expositionAuxBruits =
// //     "expositionAuxBruits is required";
// // }
//
if(Validator.isEmpty(data.expositionAuxBruits)){
  errors.expositionAuxBruits = "L'exposition aux bruits is required";
}

 if(!data.expositionAuxBruits.match(/[^0-9]/)){
    errors.expositionAuxBruits="expositionAuxBruits ne correspond pas au bon format!";
  }
//
// // end of caracteristiques chambres validation
//
// // caracteristiques sanitaires validation
//
// // if (
// //   !Validator.matches(
// //     data.taillePiecesSanitaires,
// //     'Trés petite',
// //     'Petite',
// //     'Normale',
// //     'Grande',
// //     'Trés grande'
// //   )
// // ) {
// //   errors.taillePiecesSanitaires =
// //     "taille is required";
// // }
//
if(Validator.isEmpty(data.taillePiecesSanitaires)){
  errors.taillePiecesSanitaires = "La taille des pièces sanitaires is required";
}

 if(!data.taillePiecesSanitaires.match(/[^0-9]/)){
    errors.taillePiecesSanitaires="taillePiecesSanitaires ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.nombreDeSanitaires,
// //     'Inexistant',
// //     'Insuffisant',
// //     'Normal',
// //     'Elevé',
// //     'Trés elevé'
// //   )
// // ) {
// //   errors.nombreDeSanitaires =
// //     "nombre is required";
// // }
//
if(  Validator.isEmpty(data.nombreDeSanitaires)){
  errors.nombreDeSanitaires = "Le nombre des pièces sanitaires is required";
}

 if(!data.nombreDeSanitaires.match(/[^0-9]/)){
    errors.nombreDeSanitaires="nombreDeSanitaires ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.qualiteEtatSanitaires,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.qualiteEtatSanitaires =
// //     "qualite is required";
// // }
//
if(Validator.isEmpty(data.qualiteEtatSanitaires)){
  errors.qualiteEtatSanitaires = "La qualité des sanitaires is required";
}

 if(!data.qualiteEtatSanitaires.match(/[^0-9]/)){
    errors.qualiteEtatSanitaires="qualiteEtatSanitaires ne correspond pas au bon format!";
  }
//
// // end of caracteristiques sanitaires validation
//
// // caracteristiques energie validation
//
// // if (
// //   !Validator.matches(
// //     data.factureEnergetique,
// //     'Trés elevée',
// //     'Elevée',
// //     'Moyenne',
// //     'Faible',
// //     'Trés faible'
// //   )
// // ) {
// //   errors.factureEnergetique =
// //     "factureEnergetique is required";
// // }
//
if(Validator.isEmpty(data.factureEnergetique)){
  errors.factureEnergetique = "La facuture énérgitique is required";
}

 if(!data.factureEnergetique.match(/[^0-9]/)){
    errors.factureEnergetique="factureEnergetique ne correspond pas au bon format!";
  }
//
// // if (
// //   !Validator.matches(
// //     data.installationElectrique,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.installationElectrique =
// //     "installation_electrique is required";
// // }
//
if(Validator.isEmpty(data.installationElectrique)){
  errors.installationElectrique = "L'installation éléctronique is reuqired";
}

 if(!data.installationElectrique.match(/[^0-9]/)){
    errors.installationElectrique="installationElectrique ne correspond pas au bon format!";
  }
//
// // if (
// //
// //   !Validator.matches(
// //     data.installationGaz,
// //     'Mauvaise',
// //     'Médiocre',
// //     'Moyenne',
// //     'Bonne',
// //     'Trés bonne'
// //   )
// // ) {
// //   errors.installationGaz =
// //     "installation_gaz is required";
// // }
//
if(Validator.isEmpty(data.installationGaz)){
  errors.installationGaz = "L'installation du gaz is required";
}

 if(!data.installationGaz.match(/[^0-9]/)){
    errors.installationGaz="installationGaz ne correspond pas au bon format!";
  }
//
// // end of caracteristiques energie validation

if(Validator.isEmpty(data.balconLogiaTerasse)){
  errors.balconLogiaTerasse = " Balcon/Logia/Terasseis required";
}

 if(!data.balconLogiaTerasse.match(/[^0-9]/)){
    errors.balconLogiaTerasse="balconLogiaTerasse ne correspond pas au bon format!";
  }

if(Validator.isEmpty(data.caveSousSol)){
  errors.caveSousSol = "Cave/Sous-sol is required";
}

 if(!data.caveSousSol.match(/[^0-9]/)){
    errors.caveSousSol="caveSousSol ne correspond pas au bon format!";
  }

if(Validator.isEmpty(data.agrementJardin)){
  errors.agrementJardin = "L'agrément jardin is required";
}

 if(!data.agrementJardin.match(/[^0-9]/)){
    errors.agrementJardin="agrementJardin ne correspond pas au bon format!";
  }

if(Validator.isEmpty(data.garageOuParkingOuvert)){
  errors.garageOuParkingOuvert = "Garage/Parking ouvert is required";
}


 if(!data.garageOuParkingOuvert.match(/[^0-9]/)){
    errors.garageOuParkingOuvert="garageOuParkingOuvert ne correspond pas au bon format!";
  }
if(Validator.isEmpty(data.combles)){
  errors.combles = "Combles is required";
}

 if(!data.combles.match(/[^0-9]/)){
    errors.combles="combles ne correspond pas au bon format!";
  }

if (Validator.isEmpty(data.renove)) {
  errors.renove =
    "renove is required";
}

if(data.renove<0){
    errors.renove="renove doit etre un chiffre positive";
  }

if (Validator.isEmpty(data.valorisationTerrain)) {
  errors.valorisationTerrain =
    "La valorisation terrain is required";
}

if(data.valorisationTerrain<0){
    errors.valorisationTerrain="valorisationTerrain doit etre un chiffre positive";
  }

if (Validator.isEmpty(data.decoteBienOccupe)) {
  errors.decoteBienOccupe =
    "decote Bien Occupe is required";
}

if(data.decoteBienOccupe<0){
    errors.decoteBienOccupe="decoteBienOccupe doit etre un chiffre positive";
  }

if (Validator.isEmpty(data.travauxARealiser)) {
  errors.travauxARealiser =
    "Travaux a réaliser  is required";
}

if(data.travauxARealiser<0){
    errors.travauxARealiser="travauxARealiser doit etre un chiffre positive";
  }

if (Validator.isEmpty(data.autresElements)) {
  errors.autresElements =
    "Autres élements  is required";
}

if(data.autresElements<0){
    errors.autresElements="autresElements doit etre un chiffre positive";
  }

if(!data.methodeReferenceSelected
  && !data.methodeComparaisonSelected
  && !data.methodeCapitalisationSelected){
    errors.methodes =
    "Please make sure you choose at least one method before estimate";
  }


///////////////////////////// end of estimation validation ////////////////////////////////



// end of required fields validation

return {
  errors,
  isValid: isEmpty(errors)
};
};

