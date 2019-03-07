module.exports = {
  defaultEstimationComparaison: DefaultBien => {
    // returns house data + estimation field filled

    // SCRAPPER LE MAX POSSIBLE DE BIENS QUI ONT LES MEME CARACTERISTIQUES AVEC DEFAULTBIEN ET LES METTRE DANS UN TABLEAU D'OBJETS
    // JAPPELLE LE TABLEAU TAB FOR NOW

    for (var bien in tab) {
      DefaultBien.prix_estimation += bien.prix_estimation;
      DefaultBien.prix_estimation = DefaultBien.prix_estimation / tab.length();
    }
    return DefaultBien;
  },

  defaultEstimationReference: DefaultBien => {
    // SCRAPPER UN BIEN QUI EST LE PLUS SIMILAIRE A DEFAULTBIEN ET LE METTRE DANS UNE VARIABLE QUE JAPPELLE objet FOR NOW
    if (objet.surface === DefaultBien.surface) {
      Defaultbien.prix_estimation = objet.prix_estimation;
      return DefaultBien;
    }

    var a = objet.prix_estimation;
    var b = objet.surface;
    var c = DefaultBien.surface;
    DefaultBien.prix_estimation = (b * c) / a;
    return DefaultBien;
  },

  defaultEstimationInvestisment: (DefaultBien, NombreAnnee) => {
    const avg_prix = DefaultBien.getPrixBienSimilaire();
    const growth_percentage = getAvgGrowth();
    //DefaultBien.prix_estimation = compounded interest on nombre annee
    return DefaultBien;
  }
};
