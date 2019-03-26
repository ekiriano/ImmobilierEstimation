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
        required: [true, 'The civilite is required'],
        enum: [
          "aucun",
          "monsieur",
          "madame",
          "monsieur et madame",
          "messieurs",
          "mesdames"
        ]
      },

      name: {
        first: {type: String, required: [true, 'The first name is required']},
        last: {type: String, required: [true, 'The last name is required']}
      },

      email: {
        type: String,
        required: [true, 'The email is required']
      },

      telephone: {
        type: number,
        required: [true, 'The phone number is required']
      },
    }
  ],
  maison: [{
    localisation:
    {
      addresse:
      {
        numero: {type: Number, required: [true, 'The street number is required']},
        voie: {type: String, required: [true, 'The street name is required']},
        code_postale: {type: Number, required: [true, 'The zip code is required']},
        ville: {type: String, required: [true, 'The city is required']}
      }
    },

    informations:
    {
      annee_construction: {
        type: Number,
        required: [true, 'The construction year is required'],
        min: 1000
      },

      type_bien: {
        type: String,
        required: [true, 'The construction year is required'],
        enum: [
          // we need to fill this, (not very sure that this field needs to be here)
        ]
      },

      number_of_pieces: {
        type: Number,
        required: [true, 'The number of pieces is required'],
        min: 0
      },

      number_of_rooms: {
        type: Number,
        required: [true, 'The number rooms is required'],
        min: 0
      },

      habitable_surface: {
        type: Number,
        required: [true, 'The habitable surface is required'],
        min: 0
      },

      ground_surface: {
        type: Number,
        required: [true, 'The ground surface is required'],
        min: 0
      },

      number_of_levels: {
        type: Number,
        required: [true, 'The number of levels is required'],
        min: 0
      },

      elevator: {
        type: Boolean,
        required: [true, 'The elevator is required']
      },

      balcony: {
        type: Boolean,
        required: [true, 'The balcony is required']
      },

      can_sell: {
        type: Boolean,
        required: [true, 'The can sell is required']
      },
    },

    charges_maison:
    {
      charges:
      {
        annual: {type: Number, required: [true, 'The annual charges is required'], min: 0},
        coprepriete: {type: Number, required: [true, 'The coprepriete charges is required'], min: 0},
      },
      impots: {
        type: Number,
        required: [true, 'The impots is required'],
        min: 0
      }
    },

    photos_plan:
    {


    },

    annexes:
    {

    },

    points:
    {
      forts:
      {
        type: String,
        required: true
      },
      faibles:
      {
        type: String,
        required: true
      }

    },

    commentaires:
    {
      content: {
        type: String,
        required: [true, 'The commentaire is required']
      }
    },
  }],
  caracteristique: [
    {
      elements_principaux:
      {
        etat_qualite: {
        type: String,
        required: [true, 'The etat is required'],
        // enum: [
        //   'Mauvais',
        //   'Mediocore'
        //   'Moyen',
        //   'Bon',
        //   'Tres bon'
        // ]
      },

      epoque_contruction: {
        type: String,
        required: [true, 'The contruction period is required'],
        // enum: [
        //   'Pas recherché',
        //   'Peu recherché'
        //   'Neutre',
        //   'Recherché',
        //   'Trés recherché'
        // ]
      },

      mitoyennite: {
        type: String,
        required: [true, 'The mitoyennite is required'],
        // enum: [
        //   '3 cotés',
        //   '2 cotés'
        //   '1 cotés',
        //   'Pas de dependance',
        //   'Maison independante'
        // ]
      },

      general_agreement: {
        type: String,
        required: [true, 'The general agreement is required'],
        // enum: [
        //   'Tres desagreable',
        //   'Desagreable'
        //   'Moyen',
        //   'Agreable',
        //   'Tres agreable'
        // ]
      },

      standing: {
        type: String,
        required: [true, 'The standing is required'],
        // enum: [
        //   'Mauvais',
        //   'Mediocore'
        //   'Moyen',
        //   'Bon',
        //   'Tres bon'
        // ]
      },

      accessibilité: {
        type: String,
        required: [true, 'The accessibilité is required'],
        // enum: [
        //   'Trés difficile',
        //   'Difficile'
        //   'Normal',
        //   'Facile',
        //   'Tres facile'
        // ]
      },

      tout_a_legout : {
        type: String,
        required: [true, 'The tout a legout is required'],
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
    },

    autres_elements:
    {
      qualite_architecturale : {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      etat_portes_fenetres : {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      etat_toitures : {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      cloture_terrain : {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
    },

    environnement:
    {
      nuisances_sonores: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      voisinage: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      qualite_environnement: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      proximite_services_publique: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    criteres_generaux:
    {
      qualite_destribution: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      etat_murs_plafonds: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      sois_revetements_sols: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    sejour:
    {
      taille: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      exposition: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      vue: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      lumonisite: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      cheminee: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    cuisine:
    {
      taille: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      equipement: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      etat_general: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      agrement: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    chambres:
    {
      taille: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      etat: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      exposition_bruit: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    sanitaires:
    {
      taille: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      nombre: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      qualite: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    energie:
    {
      facture: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      installation_electrique: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      installation_gaz: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    },

    annexes:
    {
      balcon: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      cave: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      agrement_jardin: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      garage_parking_couvert: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },
      combles: {
        type: String,
        required: true,
        // enum: [
        //   'Rien',
        //   'A revoir'
        //   'Assainissement individuel',
        //   'Partiel',
        //   'Complet'
        // ]
      },

    }
  }],
  estimation: [{}]

  // add longtitude latitude
});

module.exports = House = mongoose.model("House", HouseSchema);
