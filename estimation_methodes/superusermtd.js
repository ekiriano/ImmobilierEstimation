module.exports = {
  EstimationComparaison: Bien => {

  	var json = require('../datasets/superBien.json');

  //   var nbr=0;
  //   var estime=0;
  //   var surfacemoy=0;
  //   for(var bien=0;bien<json.maisons.length;bien++){
  //     if(json.maisons[bien].bienImmobillier.localisationBien.codePostal== Bien.codePostal){
  //     estime=estime+json.maisons[bien].estimation.prix_estimation.methodecomparaison;
  //     surfacemoy=surfacemoy + json.maisons[bien].informations.surfaceHabitable;
  //     nbr++;
  //   }
  // }
  // surfacemoy=surfacemoy/nbr;
  //
  //
  // estime=estime/nbr;
  //
  // var a= surfacemoy;
  // var b= Bien.surfaceHabitable;
  // var c = estime;
  // var estimmation = Math.round( (b*c)/a);
  // Bien.prix_comparaison=estimmation;
  //   Bien.prix_comparaison=Bien.prix_comparaison-(Bien.decoteBienOccupe+Bien.autresElements+Bien.travauxARealiser+Bien.valorisationTerrain+Bien.renove);
  //   console.log(Bien.prix_comparaison);
  Bien.prix_comparaison = 1000;

    return Bien;
  },

  EstimationReference: Bien => {
  	var json = require('../datasets/superBien.json');

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
        console.log(Math.round(Bien.estimation.prix_estimation.methodereference));

  },

  EstimationCapitalisation: Bien => {

    Bien.estimation.prix_estimation.methodecapitalisation= (Bien.informations.valeurLocative * 12)/ (Bien.informations.tauxCapitalisation/100);
    Bien.estimation.prix_estimation.methodecapitalisation=Bien.estimation.prix_estimation.methodecapitalisation-(Bien.estimation.decoteBienOccupe+Bien.estimation.autresElements+Bien.estimation.travauxARealiser+Bien.estimation.valorisationTerrain+Bien.estimation.renove);
    console.log(Math.round(Bien.estimation.prix_estimation.methodecapitalisation));

  },

};

/*var test =     {
  "bienImmobillier": {
      "localisationBien": {
      "codePostal": 34000 }
      },


  "informations": {
      "surfaceHabitable": 100,
      "nombrePieces":5,
      "nombreChambres":4,
      "nombreNiveaux":2,
      "prixm2":89,
      "valeurLocative": 1000,
      "tauxCapitalisation": 5.399303410679334
      },


  "estimation": {
    "decoteBienOccupe": 2574,

      "autresElements": 7078,

      "travauxARealiser": 5539,

      "valorisationTerrain": 4763,

      "renove": 7233,

      "prix_estimation": {
        "methodecomparaison": 0,
        "methodereference": 0,

        "methodecapitalisation": 0
          }
      }
    };



module.exports.EstimationComparaison(test);
module.exports.EstimationReference(test);
module.exports.EstimationCapitalisation(test);*/
