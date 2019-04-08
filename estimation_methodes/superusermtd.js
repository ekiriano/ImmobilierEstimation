module.exports = {
  HouseEstimationComparaison: Bien => {

  	var json = require('./output.json'); 

  	var i = 1;
  	for(var bien=0;bien<json.maisons.length;bien++){
  		if((Bien.estimation-10000 <= json.maisons[bien].estimation)  && (json.maisons[bien].estimation<= Bien.estimation+10000)){
  		      Bien.estimation += json.maisons[bien].estimation;
  		      i++;
  		  }
  	}
  	console.log(Bien.estimation);

  	Bien.estimation /= i;
    
    console.log(Bien.estimation);
    return Bien;
  },

  HouseEstimationReference: Bien => {
  	var json = require('./output.json'); 
  	var objet;
  	for(var bien=0;bien<json.maisons.length;bien++){
  		if((Bien.estimation-100000 <= json.maisons[bien].estimation)  && (json.maisons[bien].estimation<= Bien.estimation+100000)){
  			objet=json.maisons[bien];
  		  }
  	}


      if (objet.bienImmobillier.informations.surfaceHabitable == Bien.bienImmobillier.informations.surfaceHabitable) {
      Bien.estimation = objet.estimation;
      return Bien;
    }

    var a = objet.estimation;
    var b = objet.bienImmobillier.informations.surfaceHabitable;
    var c = Bien.bienImmobillier.informations.surfaceHabitable;
    Bien.estimation = ((a * c) / b);
        console.log(Bien.estimation);

    return Bien;
  },

 /* defaultEstimationInvestisment: (DefaultBien, NombreAnnee) => {
    const avg_prix = DefaultBien.getPrixBienSimilaire();
    const growth_percentage = getAvgGrowth();
    //DefaultBien.prix_estimation = compounded interest on nombre annee
    return DefaultBien;
  }*/

  // ---------------- waiting on abed to update appartement model

  AppartementEstimationComparaison: Bien => {},
  AppartementEstimationReference: Bien => {},
  		
};

var test = {
	user: 0,
	client: {civilite: "Arlington Road", 
		prenom: "", 
		nom: "" , 
		email: "cory.connor@dynaroc.name", 
		telephone: 195 },
	bienImmobillier: {
		informations: {surfaceHabitable: 25,
			prixm2: 10243 }
		},
    estimation: 300000

    };



module.exports.HouseEstimationComparaison(test);
module.exports.HouseEstimationReference(test);

