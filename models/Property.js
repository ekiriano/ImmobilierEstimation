const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PropertySchema = new Schema({
    User: {
      type: Schema.Types.ObjectId,
    },
    adress: {
      type: String,
      required: true
    },
    zipCode : {
      type: String,
      required: true
    },
    city: {
      type: String, 
      required : true,
    },
    surface : {
        type : String,
        required : true,
    },
    room_nb : {
        type : Number,
        required : true,
    },
    bathroom_nb :{ 
        type : Number,
        required : true,
    },
    submission_date: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = Property = mongoose.model('properties', PropertySchema);
  