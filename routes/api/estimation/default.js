const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  defaultEstimationHouse,
  defaultEstimationAppartment
} = require("../../../estimation_methodes/defaultmtd");

// Load Input Validation
const validateDefaultHouseInput = require("../../../validation/defaultHouse");
const validateDefaultAppartmentInput = require("../../../validation/defaultAppartment");

// Load Default House Model
//const DefaultHouse = require("../../../models/DefaultHouse");
const DefaultAppartment = require("../../../models/DefaultAppartment");
const DefaultHouse = require("../../../models/DefaultHouse");
/**
 * @route   POST /routes/api/estimation/default/house
 * @desc    Estimate default house without  saving it
 * @access  Public
 */
router.post("/house", (req, res) => {
  const { errors, isValid } = validateDefaultHouseInput(req.body);
  // Check validation
  if (!isValid) {
    console.log(errors); // at final es lint handle properly the errors and no logs
    return res.status(400).json(errors);
  }

  const newDefaultHouse = new DefaultHouse({
    rue: req.body.rue,
    code_postal: req.body.code_postal,
    ville: req.body.ville,
    surface_habitable: req.body.surface_habitable,
    surface_totale_terrain: req.body.surface_totale_terrain,
    surface_habitable_constructible: req.body.surface_habitable_constructible,
    nombre_pieces: req.body.nombre_pieces,
    nombre_salle_bain: req.body.nombre_salle_bain,
    nombre_niveaux: req.body.nombre_niveaux,
    annee_construction: req.body.annee_construction,
    diagnostic_performance_energetique:
      req.body.diagnostic_performance_energetique,
    etat_bien: req.body.etat_bien,
    qualite_maison: req.body.qualite_maison,
    luminosite: req.body.luminosite,
    calme: req.body.calme,
    proximite_transports: req.body.proximite_transports,
    qualite_toiture: req.body.qualite_toiture
  });

  const EstimatedDefaultHouse = defaultEstimationHouse(newDefaultHouse);
  res.json(EstimatedDefaultHouse);
});

/**
 * @route   POST /routes/api/estimation/default/appartment
 * @desc    Estimate default appartment
 * @access  Public
 */
router.post("/appartement", (req, res) => {
  const { errors, isValid } = validateDefaultAppartmentInput(req.body);
  // Check validation
  if (!isValid) {
    console.log(errors); // at final es lint handle properly the errors and no logs
    return res.status(400).json(errors);
  }

  const newDefaultAppartment = new DefaultAppartment({
    rue: req.body.rue,
    code_postal: req.body.code_postal,
    ville: req.body.ville,
    surface: req.body.surface,
    nombre_pieces: req.body.nombre_pieces,
    nombre_salle_bain: req.body.nombre_salle_bain,
    etage: req.body.etage,
    nombre_etage_total: req.body.nombre_etage_total,
    annee_construction: req.body.annee_construction,
    diagnostic_performance_energetique:
      req.body.diagnostic_performance_energetique,
    etat_bien: req.body.etat_bien,
    qualite_maison: req.body.qualite_maison,
    luminosite: req.body.luminosite,
    calme: req.body.calme,
    proximite_transports: req.body.proximite_transports,
    qualite_toiture: req.body.qualite_toiture
  });

  const EstimatedDefaultAppartment = defaultEstimationAppartment(
    newDefaultAppartment
  );
  res.json(EstimatedDefaultAppartment);
});

/**
 * @route   POST /routes/api/estimation/default/house/save
 * @desc    Estimate default house and save it in user account for later use
 * @access  Auth Users
 *
 */
router.post(
  "/house/save",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDefaultHouseInput(req.body);
    // Check validation
    if (!isValid) {
      console.log(errors); // at final es lint handle properly the errors and no logs
      return res.status(400).json(errors);
    }

    const newDefaultHouse = new DefaultHouse({
      user: req.user.id,
      rue: req.body.rue,
      code_postal: req.body.code_postal,
      ville: req.body.ville,
      surface_habitable: req.body.surface_habitable,
      surface_totale_terrain: req.body.surface_totale_terrain,
      surface_habitable_constructible: req.body.surface_habitable_constructible,
      nombre_pieces: req.body.nombre_pieces,
      nombre_salle_bain: req.body.nombre_salle_bain,
      nombre_niveaux: req.body.nombre_niveaux,
      annee_construction: req.body.annee_construction,
      diagnostic_performance_energetique:
        req.body.diagnostic_performance_energetique,
      etat_bien: req.body.etat_bien,
      qualite_maison: req.body.qualite_maison,
      luminosite: req.body.luminosite,
      calme: req.body.calme,
      proximite_transports: req.body.proximite_transports,
      qualite_toiture: req.body.qualite_toiture
    });
    const EstimatedDefaultHouse = defaultEstimationHouse(newDefaultHouse);
    EstimatedDefaultHouse.save()
      .then(defaultHouse => res.json(defaultHouse))
      .catch(err => console.log(err));
  }
);

/**
 * @route   POST /api/estimation/default/appartment/save
 * @desc    Estimate default appartment and save it in user account for later use
 * @access  Auth Users
 *
 */
router.post(
  "/appartement/save",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDefaultAppartmentInput(req.body);
    // Check validation
    if (!isValid) {
      console.log(errors); // at final es lint handle properly the errors and no logs
      return res.status(400).json(errors);
    }

    const newDefaultAppartment = new DefaultAppartment({
      user: req.user.id,
      rue: req.body.rue,
      code_postal: req.body.code_postal,
      ville: req.body.ville,
      surface: req.body.surface,
      nombre_pieces: req.body.nombre_pieces,
      nombre_salle_bain: req.body.nombre_salle_bain,
      etage: req.body.etage,
      nombre_etage_total: req.body.nombre_etage_total,
      annee_construction: req.body.annee_construction,
      diagnostic_performance_energetique:
        req.body.diagnostic_performance_energetique,
      etat_bien: req.body.etat_bien,
      qualite_maison: req.body.qualite_maison,
      luminosite: req.body.luminosite,
      calme: req.body.calme,
      proximite_transports: req.body.proximite_transports,
      qualite_toiture: req.body.qualite_toiture
    });
    const EstimatedDefaultAppartment = defaultEstimationAppartment(
      newDefaultAppartment
    );
    EstimatedDefaultAppartment.save()
      .then(defaultAppartment => res.json(defaultAppartment))
      .catch(err => console.log(err));
  }
);

router.get(
  '/appartement/saved',
passport.authenticate("jwt", {session: false}),
(req,res) => {
 var user = {
   id : req.user.id
 }
 DefaultAppartment.find({"user" : user.id})
 .then(data => {
    if(data){
       res.json(data);
    } else{
      return res.status(400).json({error : "pas d'appartements sauvegardes trouvées"});
    }
 })
 .catch(err => console.log(err));
 
}
);

router.get(
  '/houses/saved',
passport.authenticate("jwt", {session: false}),
(req,res) => {
 var user = {
   id : req.user.id
 }
 DefaultHouse.find({"user" : user.id})
 .then(data => {
    if(data){
       res.json(data);
    } else{
      return res.status(400).json({error : "pas de maisons sauvegardés trouvées"});
    }
 })
 .catch(err => console.log(err));
 
}
);
module.exports = router;
