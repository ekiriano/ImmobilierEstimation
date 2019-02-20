const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HouseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  client: [
    {
      civilite: {
        type: String,
        required: true,
        enum: [
          "aucun",
          "monsieur",
          "madame",
          "monsieur et madame",
          "messieurs",
          "mesdames"
        ]
      }
    }
  ],
  maison: [{}],
  carateristique: [{}],
  estimation: [{}]

  // add longtitue latitude
});

module.exports = House = mongoose.model("House", HouseSchema);
