module.exports = {
  
  defaultEstimationAppartment : DefaultAppartment => {
    var json = require('../datasets/AppartementData.json');


    var nbr=0;
    var estime=0;
    var surfacemoy=0;
    for(var bien=0;bien<json.maisons.length;bien++){
      if(json.maisons[bien].codePostal== DefaultAppartment.codePostal){
      estime=estime+json.maisons[bien].prix_estimation;
      surfacemoy=surfacemoy + json.maisons[bien].surface;
      nbr++;
    }
  }
  surfacemoy=surfacemoy/nbr;


  estime=estime/nbr;

  var a= surfacemoy;
  var b= DefaultAppartment.surface;
  var c = estime;
  var estimmation = Math.round( (b*c)/a) ;
  DefaultAppartment.prix_estimation = estimmation;
  console.log(DefaultAppartment.prix_estimation);

  return DefaultAppartment;

  },

  defaultEstimationHouse: DefaultHouse => {

    var json = require('../datasets/HouseData.json');


    var nbr=0;
    var estime=0;
    var surfacemoy=0;
    for(var bien=0;bien<json.maisons.length;bien++){
      if(json.maisons[bien].codePostal== DefaultHouse.codePostal){
      estime=estime+json.maisons[bien].prix_estimation;
      surfacemoy=surfacemoy + json.maisons[bien].surface_habitable;
      nbr++;
    }
  }
  surfacemoy=surfacemoy/nbr;


  estime=estime/nbr;

  var a= surfacemoy;
  var b= DefaultHouse.surface_habitable;
  var c = estime;
  var estimmation = Math.round( (b*c)/a) ;
  DefaultHouse.prix_estimation = estimmation;
  console.log(DefaultHouse.prix_estimation);

  return DefaultHouse;

  },
};

/*var test = {
        "code_postal": 34000,
        "surface": 50,
        "nombre_pieces":3,
        "nombre_salle_bain":4,
        "nombre_etage_total":5,
        "annee_construction":1963,
        "prix_estimation":0
    };

var test1=     {
        "code_postal": 34000,
        "surface_habitable":50,
        "surface_totale_terrain":50,
        "surface_habitable_constructible":77,
        "nombre_niveaux":8,
        "nombre_pieces":6,
        "nombre_salle_bain":8,
        "nombre_etage_total":6,
        "annee_construction":2016,
        "prix_estimation":0
    };


module.exports.defaultEstimationHouse(test1);
module.exports.defaultEstimationAppartment(test);*/
