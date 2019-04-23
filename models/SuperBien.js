const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SuperBienSchema = new Schema({
      user: { type: Schema.Types.ObjectId,  ref: "users" },
      civilite: { type: String, required: true },
      prenom: {type: String, required: true  },
      nom: {type: String, required: true },
      adressePostale: {type: String, required: true },
      email: {type: String, required: true },
      telephone: {type: Number, required: true  },
      numero: {type: Number, required: true },
      voie: {type: String, required: true },
      codePostal: {type: Number, required: true },
      ville: {type: String, required: true },
      anneeConstruction: {type: Number,  min: 1000},
      typeBienAffiche: {type: String, required: true },
      nombrePieces: {type: Number,  min: 0, required: true},
      nombreChambres: {type: Number,   min: 0, required: true},
      surfaceHabitable: {type: Number, min: 0, required: true},
      surfaceTerrain: { type: Number,  min: 0, required: true},
      nombreNiveaux: {type: Number,  min: 0, required: true},
      ascenseur: {type: String, },
      balconOuTerrasse: {type: String, },
      LibreALaVente: {type: String, },
      titreDossier: {type: String, },
      descriptifBien: {type: String, },
      DPE: {type: String, },
      GES: {type: String, },
      prixMandat: {type: Number,   min: 0},
      // prixm2: {type: Number,  min:0},
      chargesAnnuellesTotales: {type: Number,  min: 0},
      chargesDeCopropriete: {type: Number,  min: 0},
      impotsFonciers: {type: Number,   min: 0},
      annexes: [{ content: { type: String } }],
      pointsForts:[{ content: { type: String } }],
      pointsFaibles:[{ content: { type: String } }],
      commentairesConfidentiels: {type: String, },
        etatQualiteGrosOeuvre: {
        type: String,

      },
      epoqueConstruction: {
        type: String,

      },
      mitoyennete: {
        type: String,

      },
      agrementGeneral: {
        type: String,

      },
      standing: {
        type: String,

      },
      accessibilite: {
        type: String,

      },
      toutAEgout : {
        type: String,

      },
      qualiteArchitecturale : {
        type: String,

      },
      etatPortesEtFenetres : {
        type: String,

      },
      etatDesToitures : {
        type: String,

      },
      clotureTerrain : {
        type: String,

      },
      nuissanceSonore: {
        type: String,

      },
      voisinageVisaVis: {
        type: String,

      },
      qualiteEnvironnement: {
        type: String,

      },
      proximiteServicesPublics: {
        type: String,

      },
      qualiteDistribution: {
        type: String,

      },
      etatMursPlafonds: {
        type: String,

      },
      solsEtRevetementSols: {
        type: String,

      },
      tailleSejour: {
        type: String,

      },
      expositionSejour: {
        type: String,

      },
      vueSejour: {
        type: String,

      },
      luminosite: {
        type: String,

      },
      cheminee: {
        type: String,

      },
      taille: {
        type: String,

      },
      equipement: {
        type: String,

      },
      etatGeneral: {
        type: String,

      },
      agrement: {
        type: String,

      },
      tailleDesPieces: {
        type: String,

      },
      etatDesPieces: {
        type: String,

      },
      expositionAuxBruits: {
        type: String,

      },
      taillePiecesSanitaires: {
        type: String,

      },
      nombreDeSanitaires: {
        type: String,

      },
      qualiteEtatSanitaires: {
        type: String,

      },
      factureEnergetique: {
        type: String,

      },
      installationElectrique: {
        type: String,

      },
      installationGaz: {
        type: String,

      },
      balconLogiaTerasse: {
        type: String,

      },
      caveSousSol: {
        type: String,

      },
      agrementJardin: {
        type: String,

      },
      garageOuParkingOuvert: {
        type: String,

      },
      combles: {
        type: String,

      },
    decoteBienOccupe: {
      type: Number,

    },
    decoteBienOccupeR: {
      type: String,

    },
    autresElements: {
      type: Number,

    },
    autresElementsR: {
      type: String,

    },
    travauxARealiser: {
      type: Number,

    },
    travauxARealiserR: {
      type: String,

    },
    valorisationTerrain: {
      type: Number,

    },
    valorisationTerrainR: {
      type: String,

    },
    renove: {
      type: Number,

    },
    renoveR: {
      type: String,

    },
    textePredifini: {
      type: String,
    },
    textePredifiniR: {
      type: String
    }

  // add longtitude latitude
});

module.exports = SuperBien = mongoose.model("SuperBien", SuperBienSchema);
