const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DefaultHouseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
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
  surface_habitable: {
    type: Number,
    required: true
  },
  surface_totale_terrain: {
    type: Number,
    required: true
  },
  surface_habitable_constructible: {
    type: Number,
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
  nombre_niveaux: {
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
  },
  prix_estimation: {
    type: Number
  }

  // add longtitue latitude
});

module.exports = DefaultHouse = mongoose.model(
  "defaultHouse",
  DefaultHouseSchema
);
