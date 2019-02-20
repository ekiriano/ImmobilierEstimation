// export the mtd

/**
 * @todo Add second argument later $options = null for multiple methods of estimation
 */

module.exports = {
  defaultEstimationHouse: DefaultHouse => {
    // returns house data + estimation field filled
    // undefined method so base price  :: 100 000
    // for testing purpuses
    DefaultHouse.prix_estimation = 100000;
    return DefaultHouse;
  },
  defaultEstimationAppartment: DefaultAppartment => {
    // returns appartment data + estimation field filled
    // undefined method so base price  :: 50 000
    // for testing purpuses
    DefaultAppartment.prix_estimation = 50000;
    return DefaultAppartment;
  }
};
