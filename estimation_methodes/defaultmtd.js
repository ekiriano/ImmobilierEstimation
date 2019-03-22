module.exports = {
  defaultEstimationAppartment: DefaultAppartement => {
    DefaultAppartement.prix_estimation = 10000;
    return DefaultAppartement;
  },
  defaultEstimationHouse: DefaultHouse => {
    DefaultHouse.prix_estimation = 1000000;
    return DefaultHouse;
  },
  defaultEstimationComparaison: DefaultBien => {

  	var json = require('./output.json'); 

  	var i = 1;
  	for(var bien=0;bien<json.maisons.length;bien++){
  		if((DefaultBien.prix_estimation-10000 <= json.maisons[bien].prix_estimation)  && (json.maisons[bien].prix_estimation<= DefaultBien.prix_estimation+10000)){
  		      DefaultBien.prix_estimation += json.maisons[bien].prix_estimation;
  		      i++;
  		  }
  	}
  	console.log(DefaultBien.prix_estimation);

  	DefaultBien.prix_estimation /= i;
    
    console.log(DefaultBien.prix_estimation);
    return DefaultBien;
  },

  defaultEstimationReference: DefaultBien => {
  	var json = require('./output.json'); 
  	var objet;
  	for(var bien=0;bien<json.maisons.length;bien++){
  		if((DefaultBien.prix_estimation-10000 <= json.maisons[bien].prix_estimation)  && (json.maisons[bien].prix_estimation<= DefaultBien.prix_estimation+10000)){
  			objet=json.maisons[bien];
  		  }
  	}
   

      if (objet.surface_habitable === DefaultBien.surface_habitable) {
      Defaultbien.prix_estimation = objet.prix_estimation;
      return DefaultBien;
    }

    var a = objet.prix_estimation;
    var b = objet.surface_habitable;
    var c = DefaultBien.surface_habitable;
    DefaultBien.prix_estimation = ((a * c) / b);
        console.log(DefaultBien.prix_estimation);

    return DefaultBien;
  },

  defaultEstimationInvestisment: (DefaultBien, NombreAnnee) => {
    const avg_prix = DefaultBien.getPrixBienSimilaire();
    const growth_percentage = getAvgGrowth();
    //DefaultBien.prix_estimation = compounded interest on nombre annee
    return DefaultBien;
  }
  		
};

var test= { user: 21,
  rue: 'Rutland Drive',
  code_postal: '83411',
  ville: 'Fargo',
  surface_habitable: 136,
  surface_totale_terrain: '74',
  surface_habitable_constructible: '45',
  nombre_pieces: '1',
  nombre_salle_bain: '5',
  nombre_niveaux: '4',
  annee_construction: '1964',
  diagnostic_performance_energetique: 'LexiconLabs',
  etat_bien: '',
  qualite_maison: '',
  luminosite: '',
  calme: '',
  proximite_transports: '',
  qualite_toiture: '',
  prix_estimation: 311822 }



module.exports.defaultEstimationComparaison(test);
module.exports.defaultEstimationReference(test);


