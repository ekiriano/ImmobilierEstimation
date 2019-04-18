const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  superEstimationBien,
} = require("../../../estimation_methodes/superusermtd");

// Super Validation
const validateSuperBienInput = require("../../../validation/SuperBien");

// Super Model
const SuperBien = require("../../../models/SuperBien");

/**
 * @route   POST /routes/api/estimation/super/bien/save
 * @desc    Estimate super bien and saves it in user account for later use
 * @access  Auth Users
 *
 */
router.post(
  "/bien/save",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSuperBienInput(req.body);
    // Check validation
    if (!isValid) {
      console.log(errors);
      return res.status(400).json(errors);
    }

    const newSuperBien = new SuperBien({
      user: req.user.id,
      // save the estimated super bien
    });
    const EstimatedSuperBien = superEstimationBien(newSuperBien);
    EstimatedSuperBien.save()
      .then(superBien => res.json(superBien))
      .catch(err => console.log(err));
  }
);

module.exports = router;
