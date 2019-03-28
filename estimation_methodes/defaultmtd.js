module.exports = {
  defaultEstimationHouse: House => {
    House.prix_estimation = House.surface_habitable * House.prixm2;
    return House;
  },

  defaultEstimationAppartment: Appartment => {
    Appartment.prix_estimation = Appartment.surface * Appartment.prixm2;
    return Appartment;
  }
};


