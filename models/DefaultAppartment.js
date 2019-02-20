const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DefaultAppartmentSchema = new Schema({
  rue: {
    type: String,
    required: true
  },
  code_postal: {
    type: String,
    required: true
  },
  ville: {
    type: String,
    required: true
  },
  nombre_pieces: {
    type: Number,
    required: true
  },
  nombre_salle_bain: {
    type: Number,
    required: true
  },
  etage: {
    type: Number,
    required: true
  },
  nombre_etage_total: {
    type: Number,
    required: true
  },
  //caracteristiquesFacultatives : @todo
  annee_construction: {
    type: Number,
    required: true
  },
  diagnostic_performance_energetique: {
    type: String,
    required: true
  },
  etat_bien: {
    type: String,
    required: true
  },
  qualite_maison: {
    type: String,
    required: true
  },
  luminosite: {
    type: String,
    required: true
  },
  calme: {
    type: String,
    required: true
  },
  proximite_transports: {
    type: String,
    required: true
  },
  qualite_toiture: {
    type: String,
    required: true
  }
  // add longtitue latitude
});

module.exports = DefaultAppartment = mongoose.model(
  "defaultAppartment",
  DefaultAppartmentSchema
);
