module.exports = {
  
  defaultEstimationAppartment : DefaultAppartment => {
    var json = require('./AppartementData.json');
    var nbr=0;
    var estime=0;
    for(var bien=0;bien<json.maisons.length;bien++){
      if(json.maisons[bien].codePostal== DefaultAppartment.codePostal){
      estime=estime+json.maisons[bien].prix_estimation;
      nbr++;
    }
  }

  estime=estime/nbr;

  DefaultAppartment.prix_estimation=estime;
  return DefaultAppartment;

  },

  defaultEstimationHouse: DefaultHouse => {
    var json = require('./HouseData.json');
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


