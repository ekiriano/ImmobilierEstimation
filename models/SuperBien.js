const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SuperBienSchema = new Schema({
    user: { type: Schema.Types.ObjectId,  ref: "users" },
      civilite: { type: String, },
      prenom: {type: String,  },
      nom: {type: String, },
      adressePostale: {type: String, },
      email: {type: String, },
      telephone: {type: Number,  },
      numero: {type: Number, },
      voie: {type: String, },
      codePostal: {type: Number, },
      ville: {type: String, },
      anneeConstruction: {type: Number,  min: 1000},
      typeBienAffiche: {type: String, },
      nombrePieces: {type: Number,  min: 0},
      nombreChambres: {type: Number,   min: 0},
      surfaceHabitable: {type: Number, min: 0},
      surfaceTerrain: { type: Number,  min: 0},
      nombreNiveaux: {type: Number,  min: 0},
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
      type: String,

    },
    decoteBienOccupeR: {
      type: String,

    },
    autresElements: {
      type: String,

    },
    autresElementsR: {
      type: String,

    },
    travauxARealiser: {
      type: String,

    },
    travauxARealiserR: {
      type: String,

    },
    valorisationTerrain: {
      type: String,

    },
    valorisationTerrainR: {
      type: String,

    },
    renove: {
      type: String,

    },
    renoveR: {
      type: String,

    }

  // add longtitude latitude
});

module.exports = SuperBien = mongoose.model("SuperBien", SuperBienSchema);
