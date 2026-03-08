const express = require('express');
const router = express.Router();
const {
  createCountry,
  getAllCountries,
  getStatesByCountry,
  getCitiesByStateAndCountry
} = require('../controllers/countryController');
router.post('/', createCountry); // 👈 add this
router.get('/', getAllCountries);
router.get('/:countryCode', getStatesByCountry);
router.get('/:countryCode/:stateCode/cities', getCitiesByStateAndCountry);
module.exports = router;
