const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateDefaultHouseInput = require("../../../validation/defaultHouse");
//const validateDefaultAppartmentInput = require("../../../validation/defaultAppartement");
// Load Default House Model
const DefaultHouse = require("../../../models/DefaultHouse");
const DefaultAppartment = require("../../../models/DefaultAppartment");

/**
 * @route   POST /routes/api/estimation/default/house
 * @desc    Register user
 * @access  Public
 */
//router.post("/house", (req, res) => {});
