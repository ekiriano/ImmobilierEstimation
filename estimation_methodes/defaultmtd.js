module.exports = {
  defaultEstimationHouse: House => {
    House.prix_estimation = House.surface_habitable * House.prixm2;
    return House;
  },


  defaultEstimationAppartment: Appartment => {
    Appartment.prix_estimation = Appartment.surface * Appartment.prixm2;
    return Appartment;

  defaultEstimationHouse: DefaultHouse => {
    DefaultHouse.prix_estimation = 1000000;
    return DefaultHouse;
  },
  defaultEstimationComparaison: DefaultBien => {

  	//var json = require('./output.json'); 
    /*
  	var i = 1;
  	for(var bien=0;bien<json.maisons.length;bien++){
  		if((DefaultBien.prix_estimation-10000 <= json.maisons[bien].prix_estimation)  && (json.maisons[bien].prix_estimation<= DefaultBien.prix_estimation+10000)){
  		      DefaultBien.prix_estimation += json.maisons[bien].prix_estimation;
  		      i++;
  		  }
  	}
  	console.log(DefaultBien.prix_estimation);

  	DefaultBien.prix_estimation /= i;
    
    console.log(DefaultBien.prix_estimation);*/
    return DefaultBien;
  },

  defaultEstimationReference: DefaultBien => {
    
    //var json = require('./output.json'); 
    /*
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
    */
    return DefaultBien;
  },

  defaultEstimationInvestisment: (DefaultBien, NombreAnnee) => {
    const avg_prix = DefaultBien.getPrixBienSimilaire();
    const growth_percentage = getAvgGrowth();
    //DefaultBien.prix_estimation = compounded interest on nombre annee
    return DefaultBien;

  }
};


