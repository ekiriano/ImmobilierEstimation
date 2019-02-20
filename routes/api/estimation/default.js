const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateDefaultHouseInput = require("../../../validation/defaultHouse");
const validateDefaultAppartmentInput = require("../../../validation/defaultAppartment");

// Load Default House Model
const DefaultHouse = require("../../../models/DefaultHouse");
const DefaultAppartment = require("../../../models/DefaultAppartment");

/**
 * @route   POST /routes/api/estimation/default/house
 * @desc    Estimate default house
 * @access  Public
 */
router.post("/house", (req, res) => {
  const { errors, isValid } = validateDefaultHouseInput(req.body);
  // Check validation
  if (!isValid) {
    console.log(errors); // at final es lint handle properly the errors and no logs
    return res.status(400).json(errors);
  }
  // here saves data but should just return house data object with estimation into view
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
  newDefaultHouse
    .save()
    .then(defaultHouse => res.json(defaultHouse))
    .catch(err => console.log(err));
});

/**
 * @route   POST /routes/api/estimation/default/appartment
 * @desc    Estimate default appartment
 * @access  Public
 */
//router.post("/appartment", (req, res) => {});

module.exports = router;
