/**
 * @todo Add second argument later $options = null for multiple methods of estimation
 */

module.exports = {
  superUserEstimationHouse: House => {
    // returns house data + estimation field filled
    // undefined method so base price  :: 100 000 000
    // for testing purpuses
    House.prix_estimation = 100000;
    return House;
  },
  superUserEstimationAppartment: Appartment => {
    // returns appartment data + estimation field filled
    // undefined method so base price  :: 50 000
    // for testing purpuses
    Appartment.prix_estimation = 50000000;
    return Appartment;
  }
};
