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
      if(json.maisons[bien].informations.surfaceHabitable-5<=Bien.surfaceHabitable || Bien.surfaceHabitable <= json.maisons[bien].informations.surfaceHabitable+5){
        bienSimilaire=json.maisons[bien];
      }
    }

      var a= bienSimilaire.informations.surfaceHabitable;
      var b= Bien.surfaceHabitable;
      var c = bienSimilaire.estimation.prix_estimation.methodereference;
      Bien.prix_reference= (b*c)/a;

    if(bienSimilaire.informations.nombrePieces > Bien.nombrePieces ){
      Bien.prix_reference= Bien.prix_reference + (1000*(bienSimilaire.informations.nombrePieces-Bien.nombrePieces));
    }
    if(Bien.nombrePieces > bienSimilaire.informations.nombrePieces ){
      Bien.prix_reference= Bien.prix_reference - (1000*(Bien.nombrePieces-bienSimilaire.informations.nombrePieces));
    }
    ////////////
    if(bienSimilaire.informations.nombreChambres > Bien.nombreChambres){
      Bien.prix_reference= Bien.prix_reference + (1000*(bienSimilaire.informations.nombreChambres-Bien.nombreChambres));
    }
    if(Bien.nombreChambres > bienSimilaire.informations.nombreChambres){
      Bien.prix_reference= Bien.prix_reference - (1000*(Bien.nombreChambres-bienSimilaire.informations.nombreChambres));
    }
    ///////////
    if(bienSimilaire.informations.nombreNiveaux > Bien.nombreNiveaux){
      Bien.prix_reference= Bien.prix_reference + (1000*(bienSimilaire.informations.nombreNiveaux-Bien.nombreNiveaux));
    }
    if(Bien.nombreNiveaux > bienSimilaire.informations.nombreNiveaux){
      Bien.prix_reference= Bien.prix_reference - (1000*(Bien.nombreNiveaux-bienSimilaire.informations.nombreNiveaux));
    }
    //////////
    if(bienSimilaire.informations.prixm2 > Bien.prixm2){
      Bien.prix_reference= Bien.prix_reference + (1000*(bienSimilaire.informations.prixm2-Bien.prixm2));
    }
    if(Bien.prixm2 > bienSimilaire.informations.prixm2){
      Bien.prix_reference= Bien.prix_reference - (1000*(Bien.prixm2-bienSimilaire.informations.prixm2));
    }

    Bien.prix_reference=Bien.prix_reference-(Bien.decoteBienOccupe+Bien.autresElements+Bien.travauxARealiser+Bien.valorisationTerrain+Bien.renove);
        console.log(Math.round(Bien.prix_reference));

  },

  EstimationCapitalisation: Bien => {

    Bien.prix_capitalisation= (Bien.valeurLocative * 12)/ (Bien.tauxCapitalisation/100);
    Bien.prix_capitalisation=Bien.prix_capitalisation-(Bien.decoteBienOccupe+Bien.autresElements+Bien.travauxARealiser+Bien.valorisationTerrain+Bien.renove);
    console.log(Math.round(Bien.prix_capitalisation));

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
