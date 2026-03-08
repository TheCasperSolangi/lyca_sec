const Country = require('../models/Country');

// GET /api/countries
exports.getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find({}, { states: 0 });

    res.status(200).json({
      success: true,
      data: countries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};
// POST /api/countries
exports.createCountry = async (req, res) => {
  try {
    const country = await Country.create(req.body);

    res.status(201).json({
      success: true,
      data: country
    });
  } catch (error) {
    console.error(error);

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// GET /api/countries/:countryCode
exports.getStatesByCountry = async (req, res) => {
  try {
    const { countryCode } = req.params;

    // Fetch country with states but exclude cities
    const country = await Country.findOne(
      { code: countryCode.toUpperCase() },
      { name: 1, 'states.name': 1, 'states.code': 1 } // only name and code of states
    );

    if (!country) {
      return res.status(404).json({
        success: false,
        message: 'Country not found'
      });
    }

    res.status(200).json({
      success: true,
      country: country.name,
      states: country.states
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// GET /api/countries/:countryCode/:stateCode/cities
exports.getCitiesByStateAndCountry = async (req, res) => {
  try {
    const { countryCode, stateCode } = req.params;

    const country = await Country.findOne(
      { code: countryCode.toUpperCase() },
      { name: 1, states: 1 }
    );

    if (!country) {
      return res.status(404).json({
        success: false,
        message: 'Country not found'
      });
    }

    const state = country.states.find(
      s => s.code?.toUpperCase() === stateCode.toUpperCase()
    );

    if (!state) {
      return res.status(404).json({
        success: false,
        message: 'State not found'
      });
    }

    res.status(200).json({
      success: true,
      country: country.name,
      state: state.name,
      cities: state.cities || []
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};