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

  return DefaultAppartment;

  },

  defaultEstimationHouse: DefaultHouse => {
    var json = require('../datasets/HouseData.json');
    var nbr=0;
    var estime=0;
    for(var bien=0;bien<json.maisons.length;bien++){
      if(json.maisons[bien].codePostal== DefaultAppartment.codePostal){
      estime=estime+json.maisons[bien].prix_estimation;
      nbr++;
    }
  }

  estime=estime/nbr;

  DefaultHouse.prix_estimation=estime;
  return DefaultHouse;
  },
};


