module.exports = {
  EstimationComparaison: Bien => {

  	var json = require('./data.json');

    var nbr=0;
    var estime=0;
    for(var bien=0;bien<json.maisons.length;bien++){
      if(json.maisons[bien].bienImmobillier.localisationBien.codePostal== Bien.bienImmobillier.localisationBien.codePostal){
      estime=estime+json.maisons[bien].estimation.prix_estimation.methodecomparaison;
      nbr++;
    }
  }

    estime=estime/nbr;

    Bien.estimation.prix_estimation.methodecomparaison=estime;
    Bien.estimation.prix_estimation.methodecomparaison=Bien.estimation.prix_estimation.methodecomparaison-(Bien.estimation.decoteBienOccupe+Bien.estimation.autresElements+Bien.estimation.travauxARealiser+Bien.estimation.valorisationTerrain+Bien.estimation.renove);

    return Bien;
  },

  EstimationReference: Bien => {
  	var json = require('./data.json');

    var bienSimilaire;

    for(var bien=0;bien<json.maisons.length;bien++){
      if(json.maisons[bien].informations.surfaceHabitable-5<=Bien.informations.surfaceHabitable || Bien.informations.surfaceHabitable <= json.maisons[bien].informations.surfaceHabitable+5){
        bienSimilaire=json.maisons[bien];
      }
    }

      var a= bienSimilaire.informations.surfaceHabitable;
      var b= Bien.informations.surfaceHabitable;
      var c = bienSimilaire.estimation.prix_estimation.methodereference;
      Bien.estimation.prix_estimation.methodereference= (b*c)/a;

    if(bienSimilaire.informations.nombrePieces > Bien.informations.nombrePieces ){
      Bien.estimation.prix_estimation.methodereference= Bien.estimation.prix_estimation.methodereference + (1000*(bienSimilaire.informations.nombrePieces-Bien.informations.nombrePieces));
    }
    if(Bien.informations.nombrePieces > bienSimilaire.informations.nombrePieces ){
      Bien.estimation.prix_estimation.methodereference= Bien.estimation.prix_estimation.methodereference - (1000*(Bien.informations.nombrePieces-bienSimilaire.informations.nombrePieces));
    }
    ////////////
    if(bienSimilaire.informations.nombreChambres > Bien.informations.nombreChambres){
      Bien.estimation.prix_estimation.methodereference= Bien.estimation.prix_estimation.methodereference + (1000*(bienSimilaire.informations.nombreChambres-Bien.informations.nombreChambres));
    }
    if(Bien.informations.nombreChambres > bienSimilaire.informations.nombreChambres){
      Bien.estimation.prix_estimation.methodereference= Bien.estimation.prix_estimation.methodereference - (1000*(Bien.informations.nombreChambres-bienSimilaire.informations.nombreChambres));
    }
    ///////////
    if(bienSimilaire.informations.nombreNiveaux > Bien.informations.nombreNiveaux){
      Bien.estimation.prix_estimation.methodereference= Bien.estimation.prix_estimation.methodereference + (1000*(bienSimilaire.informations.nombreNiveaux-Bien.informations.nombreNiveaux));
    }
    if(Bien.informations.nombreNiveaux > bienSimilaire.informations.nombreNiveaux){
      Bien.estimation.prix_estimation.methodereference= Bien.estimation.prix_estimation.methodereference - (1000*(Bien.informations.nombreNiveaux-bienSimilaire.informations.nombreNiveaux));
    }
    //////////
    if(bienSimilaire.informations.prixm2 > Bien.informations.prixm2){
      Bien.estimation.prix_estimation.methodereference= Bien.estimation.prix_estimation.methodereference + (1000*(bienSimilaire.informations.prixm2-Bien.informations.prixm2));
    }
    if(Bien.informations.prixm2 > bienSimilaire.informations.prixm2){
      Bien.estimation.prix_estimation.methodereference= Bien.estimation.prix_estimation.methodereference - (1000*(Bien.informations.prixm2-bienSimilaire.informations.prixm2));
    }

    Bien.estimation.prix_estimation.methodereference=Bien.estimation.prix_estimation.methodereference-(Bien.estimation.decoteBienOccupe+Bien.estimation.autresElements+Bien.estimation.travauxARealiser+Bien.estimation.valorisationTerrain+Bien.estimation.renove);
  },

  EstimationCapitalisation: Bien => {
    Bien.estimation.prix_estimation.methodecapitalisation= (Bien.informations.valeurLocative * 12)/ (Bien.informations.tauxCapitalisation/100);
    Bien.estimation.prix_estimation.methodecapitalisation=Bien.estimation.prix_estimation.methodecapitalisation-(Bien.estimation.decoteBienOccupe+Bien.estimation.autresElements+Bien.estimation.travauxARealiser+Bien.estimation.valorisationTerrain+Bien.estimation.renove);
  },

};

/*var test =     {
  "bienImmobillier": {
      "localisationBien": {
      "codePostal": 34000 }
      },
  

  "informations": {
      "surfaceHabitable": 200,
      "nombrePieces":5,
      "nombreChambres":1,
      "nombreNiveaux":1,
      "prixm2":21,
      "valeurLocative": 1200,
      "tauxCapitalisation": 4.206778355678784
      },


  "estimation": {
    "decoteBienOccupe": 2920,

      "autresElements": 9784,

      "travauxARealiser": 4376,

      "valorisationTerrain": 9315,

      "renove": 6740,

      "prix_estimation": {
        "methodecomparaison": 0,
        "methodereference": 0,
        "methodecapitalisation":0
          }
      }
    };*/



/*module.exports.EstimationComparaison();
module.exports.EstimationReference();
module.exports.EstimationCapitalisation();*/
