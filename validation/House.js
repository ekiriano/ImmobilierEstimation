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

if (Validator.isEmpty(data.client.name.first)) {
  errors.rue = "first name is required";
}

if (Validator.isEmpty(data.client.name.last)) {
  errors.rue = "last name is required";
}

if (Validator.isEmpty(data.client.email)) {
  errors.code_postal = "email is required";
}

if (Validator.isEmpty(data.client.telephone) ||
!Validator.isNumeric(data.client.telephone, { no_symbols: true })
{
  errors.client.telephone = "telephone is required";
}

///////////////////////////// end of client validation ////////////////////////////////

///////////////////////////// maison validation ////////////////////////////////

// localisation addresse validation

if (
  !Validator.isLength(data.maison.localisation.addresse.numero, { min: 1, max: 3 }) ||
  Validator.isEmpty(data.maison.localisation.addresse.numero) ||
  !Validator.isNumeric(data.maison.localisation.addresse.numero, { no_symbols: true })
) {
  errors.maison.localisation.addresse.numero =
    "street number is required";
}

if (Validator.isEmpty(data.maison.localisation.addresse.voie)) {
  errors.ville = "street name is required";
}

if (
  !Validator.isLength(data.maison.localisation.addresse.code_postal, { min: 5, max: 5 }) ||
  Validator.isEmpty(data.maison.localisation.addresse.code_postal) ||
  !Validator.isNumeric(data.maison.localisation.addresse.code_postal, { no_symbols: true })
) {
  errors.maison.localisation.addresse.code_postal =
    "code postal is required and is 5 digits and is positive";
}

if (Validator.isEmpty(data.maison.localisation.addresse.ville)) {
  errors.maison.localisation.addresse.ville =
    "city name is required";
}

// end of localisation addresse validation

// maison informations validation

if (
  Validator.isEmpty(data.maison.informations.annee_construction) ||
  !Validator.isInt(data.maison.informations.annee_construction, { gt: 1900, lt: 2019 })
) {
  errors.maison.informations.annee_construction =
    "annee_construction is required and must be between 1900 and 2019";
}

if (Validator.isEmpty(data.maison.informations.number_of_pieces)) {
  errors.maison.informations.number_of_pieces =
    "number of pieces is required and must be positive";
}

if (Validator.isEmpty(data.maison.informations.number_of_rooms)) {
  errors.maison.informations.number_of_rooms =
    "number of rooms is required and must be positive";
}

if (Validator.isEmpty(data.maison.informations.habitable_surface)) {
  errors.maison.informations.habitable_surface =
    "habitable surface is required and must be positive";
}

if (Validator.isEmpty(data.maison.informations.ground_surface)) {
  errors.maison.informations.ground_surface =
    "ground surface is required and must be positive";
}

if (Validator.isEmpty(data.maison.informations.number_of_levels)) {
  errors.maison.informations.number_of_levels =
    "number of levels is required and must be positive";
}

if (Validator.isEmpty(data.maison.informations.elevator)) {
  errors.maison.informations.elevator =
    "elevator is required";
}

if (Validator.isEmpty(data.maison.informations.balcony)) {
  errors.maison.informations.balcony =
    "balcony is required";
}

if (Validator.isEmpty(data.maison.informations.can_sell)) {
  errors.maison.informations.can_sell =
    "can sell is required";
}

// end of masion informations validation

// charges_maison

if (Validator.isEmpty(data.maison.charges_maison.charges.annual)) {
  errors.maison.charges_maison.charges.annual =
    "annual charges is required";
}

if (Validator.isEmpty(data.maison.charges_maison.charges.coprepriete)) {
  errors.maison.charges_maison.charges.coprepriete =
    "coprepriete charges is required";
}

if (Validator.isEmpty(data.maison.charges_maison.impots)) {
  errors.maison.charges_maison.impots =
    "impots is required";
}

// end of charges_maison

// maison photos_plan validation


// end of maison photos_plan validation

// maison annexes validation


// end of maison annexes validation

// maison points validation


// end of maison points validation

// maison commentaires validation


// end of maison commentaires validation



///////////////////////////// end of maison validation ////////////////////////////////

///////////////////////////// caracteristique validation ////////////////////////////////

// caracteristique elements_principaux validation

if (
  Validator.isEmpty(data.caracteristique.elements_principaux.etat_qualite) ||
  !Validator.matches(
    data.caracteristique.elements_principaux.etat_qualite,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristique.elements_principaux.etat_qualite =
    "etat is required";
}

if (
  Validator.isEmpty(data.caracteristique.elements_principaux.epoque_contruction) ||
  !Validator.matches(
    data.caracteristique.elements_principaux.epoque_contruction,
    'Pas recherché',
    'Peu recherché'
    'Neutre',
    'Recherché',
    'Trés recherché'
  )
) {
  errors.caracteristique.elements_principaux.epoque_contruction =
    "epoque de contruction is required";
}

if (
  Validator.isEmpty(data.caracteristique.elements_principaux.mitoyennite) ||
  !Validator.matches(
    data.caracteristique.elements_principaux.mitoyennite,
    '3 cotés',
    '2 cotés'
    '1 cotés',
    'Pas de dependance',
    'Maison independante'
  )
) {
  errors.caracteristique.elements_principaux.mitoyennite =
    "mitoyennite is required";
}

if (
  Validator.isEmpty(data.caracteristique.elements_principaux.general_agreement) ||
  !Validator.matches(
    data.caracteristique.elements_principaux.general_agreement,
    'Tres desagreable',
    'Desagreable'
    'Moyen',
    'Agreable',
    'Tres agreable'
  )
) {
  errors.caracteristique.elements_principaux.general_agreement =
    "general agreement is required";
}

if (
  Validator.isEmpty(data.caracteristique.elements_principaux.standing) ||
  !Validator.matches(
    data.caracteristique.elements_principaux.standing,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristique.elements_principaux.standing =
    "standing is required";
}

if (
  Validator.isEmpty(data.caracteristique.elements_principaux.accessibilité) ||
  !Validator.matches(
    data.caracteristique.elements_principaux.accessibilité,
    'Trés difficile',
    'Difficile'
    'Normal',
    'Facile',
    'Tres facile'
  )
) {
  errors.caracteristique.elements_principaux.accessibilité =
    "accessibilité is required";
}

if (
  Validator.isEmpty(data.caracteristique.elements_principaux.tout_a_legout) ||
  !Validator.matches(
    data.caracteristique.elements_principaux.tout_a_legout,
    'Rien',
    'A revoir'
    'Assainissement individuel',
    'Partiel',
    'Complet'
  )
) {
  errors.caracteristique.elements_principaux.tout_a_legout =
    "tout a l'egout is required";
}

// end of caracteristique elements_principaux validation

// caracteristique autres_elements validation

if (
  Validator.isEmpty(data.caracteristique.autres_elements.qualite_architecturale) ||
  !Validator.matches(
    data.caracteristique.autres_elements.qualite_architecturale,
    'Mauvaise',
    'Mediocore',
    'Moyenne',
    'Bonne',
    'Tres bonne'
  )
) {
  errors.caracteristique.autres_elements.qualite_architecturale =
    "Qualite architecturale is required";
}

if (
  Validator.isEmpty(data.caracteristique.autres_elements.etat_portes_fenetres) ||
  !Validator.matches(
    data.caracteristique.autres_elements.etat_portes_fenetres,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristique.autres_elements.etat_portes_fenetres =
    "etat des portes et fenetres is required";
}

if (
  Validator.isEmpty(data.caracteristique.autres_elements.etat_toitures) ||
  !Validator.matches(
    data.caracteristique.autres_elements.etat_toitures,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristique.autres_elements.etat_toitures =
    "etat des toitures is required";
}

if (
  Validator.isEmpty(data.caracteristique.autres_elements.cloture_terrain) ||
  !Validator.matches(
    data.caracteristique.autres_elements.cloture_terrain,
    'Aucun/Mauvais',
    'Mediocore',
    'Moyen',
    'Bon'
  )
) {
  errors.caracteristique.autres_elements.cloture_terrain =
    "Cloture terrain is required";
}
// end of caracteristique autres_elements validation

// caracteristique environnement validation

if (
  Validator.isEmpty(data.caracteristique.environnement.nuisances_sonores) ||
  !Validator.matches(
    data.caracteristique.environnement.nuisances_sonores,
    'Tres bruyant',
    'Bruyant'
    'Normal',
    'Calme'
  )
) {
  errors.caracteristique.environnement.nuisances_sonores =
    "Qualite architecturale is required";
}

if (
  Validator.isEmpty(data.caracteristique.environnement.voisinage) ||
  !Validator.matches(
    data.caracteristique.environnement.voisinage,
    'Tres genant',
    'Bruyant'
    'Normal',
    'Discret',
    'Aucun'
  )
) {
  errors.caracteristique.environnement.voisinage =
    "Qualite architecturale is required";
}

if (
  Validator.isEmpty(data.caracteristique.environnement.qualite_environnement) ||
  !Validator.matches(
    data.caracteristique.environnement.qualite_environnement,
    'Mauvaise',
    'Mediocore',
    'Moyenne',
    'Bonne',
    'Tres bonne'
  )
) {
  errors.caracteristique.environnement.qualite_environnement =
    "Qualite architecturale is required";
}

if (
  Validator.isEmpty(data.caracteristique.environnement.proximite_services_publique) ||
  !Validator.matches(
    data.caracteristique.environnement.proximite_services_publique,
    'Tres eloignes',
    'Assez eloignes'
    'Normales',
    'Proches',
    'Tres proches'
  )
) {
  errors.caracteristique.environnement.proximite_services_publique =
    "Qualite architecturale is required";
}

// end of caracteristique environnement validation

// caracteristique criteres_generaux validation

if (
  Validator.isEmpty(data.caracteristique.criteres_generaux.qualite_destribution) ||
  !Validator.matches(
    data.caracteristique.criteres_generaux.qualite_destribution,
    'Mauvaise',
    'Mediocore',
    'Moyenne',
    'Bonne'
  )
) {
  errors.caracteristique.criteres_generaux.qualite_destribution =
    "qualite_destribution is required";
}

if (
  Validator.isEmpty(data.caracteristique.criteres_generaux.etat_murs_plafonds) ||
  !Validator.matches(
    data.caracteristique.criteres_generaux.etat_murs_plafonds,
    'A refaire',
    'Usage'
    'Moyen',
    'Recent',
    'Neuf'
  )
) {
  errors.caracteristique.criteres_generaux.etat_murs_plafonds =
    "etat_murs_plafonds is required";
}

if (
  Validator.isEmpty(data.caracteristique.criteres_generaux.sois_revetements_sols) ||
  !Validator.matches(
    data.caracteristique.criteres_generaux.sois_revetements_sols,
    'A refaire',
    'Mediocore',
    'Convenable',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristique.criteres_generaux.sois_revetements_sols =
    "sois_revetements_sols is required";
}

// end of caracteristique criteres_generaux validation

// caracteristique sejour validation

if (
  Validator.isEmpty(data.caracteristique.sejour.taille) ||
  !Validator.matches(
    data.caracteristique.sejour.taille,
    'Tres petit',
    'Petit'
    'Normal',
    'Grand',
    'Tres grand'
  )
) {
  errors.caracteristique.sejour.taille =
    "taille is required";
}

if (
  Validator.isEmpty(data.caracteristique.sejour.exposition) ||
  !Validator.matches(
    data.caracteristique.sejour.exposition,
    'Mauvaise',
    'Mediocore',
    'Moyenne',
    'Bonne',
    'Tres bonne'
  )
) {
  errors.caracteristique.sejour.exposition =
    "exposition is required";
}

if (
  Validator.isEmpty(data.caracteristique.sejour.vue) ||
  !Validator.matches(
    data.caracteristique.sejour.vue,
    'Vus-a-vis proche',
    'Mediocore',
    'Ordinaire',
    'Belle',
    'Exceptionnelle'
  )
) {
  errors.caracteristique.sejour.vue =
    "vue is required";
}

if (
  Validator.isEmpty(data.caracteristique.sejour.lumonisite) ||
  !Validator.matches(
    data.caracteristique.sejour.lumonisite,
    'Mauvaise',
    'Mediocore',
    'Simple',
    'Belle',
    'Tres bonne'
  )
) {
  errors.caracteristique.sejour.lumonisite =
    "lumonisite is required";
}

if (
  Validator.isEmpty(data.caracteristique.sejour.cheminee) ||
  !Validator.matches(
    data.caracteristique.sejour.cheminee,
    'Inexistante',
    'Mediocore',
    'Simple',
    'Belle',
    'Exceptionnelle'
  )
) {
  errors.caracteristique.sejour.cheminee =
    "cheminee is required";
}

// end of caracteristique sejour validation

// caracteristique cuisine validation

if (
  Validator.isEmpty(data.caracteristique.cuisine.taille) ||
  !Validator.matches(
    data.caracteristique.cuisine.taille,
    'Tres petite',
    'Petite'
    'Normale',
    'Grande',
    'Tres grande'
  )
) {
  errors.caracteristique.cuisine.taille =
    "taille is required";
}

if (
  Validator.isEmpty(data.caracteristique.cuisine.equipement) ||
  !Validator.matches(
    data.caracteristique.cuisine.equipement,
    'Inexistant',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristique.cuisine.equipement =
    "equipement is required";
}

if (
  Validator.isEmpty(data.caracteristique.cuisine.etat_general) ||
  !Validator.matches(
    data.caracteristique.cuisine.etat_general,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristique.cuisine.etat_general =
    "etat_general is required";
}

if (
  Validator.isEmpty(data.caracteristique.cuisine.agrement) ||
  !Validator.matches(
    data.caracteristique.cuisine.agrement,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristique.cuisine.agrement =
    "agrement is required";
}

// end of caracteristique cuisine validation

// caracteristique chambres validation

if (
  Validator.isEmpty(data.caracteristique.chambres.taille) ||
  !Validator.matches(
    data.caracteristique.chambres.taille,
    'Tres petite',
    'Petite'
    'Normale',
    'Grande',
    'Tres grande'
  )
) {
  errors.caracteristique.chambres.taille =
    "agrement is required";
}

if (
  Validator.isEmpty(data.caracteristique.chambres.etat) ||
  !Validator.matches(
    data.caracteristique.chambres.etat,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristique.chambres.etat =
    "etat is required";
}

if (
  Validator.isEmpty(data.caracteristique.chambres.exposition_bruit) ||
  !Validator.matches(
    data.caracteristique.chambres.exposition_bruit,
    'Tres bruyante',
    'Bruyante'
    'Moyenne',
    'Faible',
    'Tres faible'
  )
) {
  errors.caracteristique.chambres.exposition_bruit =
    "exposition_bruit is required";
}

// end of caracteristique chambres validation

// caracteristique sanitaires validation

if (
  Validator.isEmpty(data.caracteristique.sanitaires.taille) ||
  !Validator.matches(
    data.caracteristique.sanitaires.taille,
    'Tres petite',
    'Petite'
    'Normale',
    'Grande',
    'Tres grande'
  )
) {
  errors.caracteristique.sanitaires.taille =
    "taille is required";
}

if (
  Validator.isEmpty(data.caracteristique.sanitaires.nombre) ||
  !Validator.matches(
    data.caracteristique.sanitaires.nombre,
    'Inexistant',
    'Insuffisant'
    'Normal',
    'Eleve',
    'Tres eleve'
  )
) {
  errors.caracteristique.sanitaires.nombre =
    "nombre is required";
}

if (
  Validator.isEmpty(data.caracteristique.sanitaires.qualite) ||
  !Validator.matches(
    data.caracteristique.sanitaires.qualite,
    'Mauvais',
    'Mediocore',
    'Moyen',
    'Bon',
    'Tres bon'
  )
) {
  errors.caracteristique.sanitaires.qualite =
    "qualite is required";
}

// end of caracteristique sanitaires validation

// caracteristique energie validation

if (
  Validator.isEmpty(data.caracteristique.energie.facture) ||
  !Validator.matches(
    data.caracteristique.energie.facture,
    'Tres Elevee',
    'Elevee'
    'Moyenne',
    'Faible',
    'Tres faible'
  )
) {
  errors.caracteristique.energie.facture =
    "facture is required";
}

if (
  Validator.isEmpty(data.caracteristique.energie.installation_electrique) ||
  !Validator.matches(
    data.caracteristique.energie.installation_electrique,
    'Mauvaise',
    'Mediocore',
    'Moyenne',
    'Bonne',
    'Tres bonne'
  )
) {
  errors.caracteristique.energie.installation_electrique =
    "installation_electrique is required";
}

if (
  Validator.isEmpty(data.caracteristique.energie.installation_gaz) ||
  !Validator.matches(
    data.caracteristique.energie.installation_gaz,
    'Mauvaise',
    'Mediocore',
    'Moyenne',
    'Bonne',
    'Tres bonne'
  )
) {
  errors.caracteristique.energie.installation_gaz =
    "installation_gaz is required";
}

// end of caracteristique energie validation

// caracteristique annexes validation

if (
  Validator.isEmpty(data.caracteristique.annexes.balcon) ||
  !Validator.matches(
    data.caracteristique.annexes.balcon,
    'Aucun/Mediocore',
    'moyen',
    'Bien',
    'Tres bien'
  )
) {
  errors.caracteristique.annexes.balcon =
    "balcon is required";
}

if (
  Validator.isEmpty(data.caracteristique.annexes.cave) ||
  !Validator.matches(
    data.caracteristique.annexes.cave,
    'Aucun',
    'Mediocore',
    'Moyen',
    'Bien',
    'Exceptionnel'
  )
) {
  errors.caracteristique.annexes.cave =
    "cave is required";
}

if (
  Validator.isEmpty(data.caracteristique.annexes.agrement_jardin) ||
  !Validator.matches(
    data.caracteristique.annexes.agrement_jardin,
    'Tres medicore',
    'Mediocore',
    'Aucun/Moyen',
    'Bien',
    'Remarquable'
  )
) {
  errors.caracteristique.annexes.agrement_jardin =
    "agrement_jardin is required";
}

if (
  Validator.isEmpty(data.caracteristique.annexes.garage_parking_couvert) ||
  !Validator.matches(
    data.caracteristique.annexes.garage_parking_couvert,
    'Sans',
    'Mediocore',
    'Moyen',
    'Bien',
    'Exceptionnel'
  )
) {
  errors.caracteristique.annexes.garage_parking_couvert =
    "garage_parking_couvert is required";
}

if (
  Validator.isEmpty(data.caracteristique.annexes.combles) ||
  !Validator.matches(
    data.caracteristique.annexes.combles,
    'Aucune/Peu',
    'Moyenne',
    'Bonne',
    'Exceptionnelle'
  )
) {
  errors.caracteristique.annexes.combles =
    "combles is required";
}

// end of caracteristique annexes validation



///////////////////////////// end of caracteristique validation ////////////////////////////////

///////////////////////////// estimation validation ////////////////////////////////


///////////////////////////// end of estimation validation ////////////////////////////////



// end of required fields validation

return {
  errors,
  isValid: isEmpty(errors)
};
};
