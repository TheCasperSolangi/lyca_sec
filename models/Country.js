const mongoose = require('mongoose');

/**
 * City Schema
 */
const CitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    code: { type: String } // optional
  },
  { _id: false }
);

/**
 * State Schema
 */
const StateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    code: { type: String },
    cities: [CitySchema]
  },
  { _id: false }
);

/**
 * Country Schema
 */
const CountrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true
    },
    country_flag: {
      type: String,
      required: true
      // can be emoji 🇵🇰 OR image URL
    },
    states: [StateSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Country', CountrySchema);
