require('dotenv').config();
const mongoose = require('mongoose');
const Country = require('./models/Country');

const MONGO_URI = process.env.MONGO_URI;

// Minimal world countries dataset (you can extend this list or import full ISO dataset)
const countries = [
  { name: 'Afghanistan', code: 'AF', country_flag: '🇦🇫' },
  { name: 'Albania', code: 'AL', country_flag: '🇦🇱' },
  { name: 'Algeria', code: 'DZ', country_flag: '🇩🇿' },
  { name: 'Argentina', code: 'AR', country_flag: '🇦🇷' },
  { name: 'Australia', code: 'AU', country_flag: '🇦🇺' },
  { name: 'Austria', code: 'AT', country_flag: '🇦🇹' },
  { name: 'Bangladesh', code: 'BD', country_flag: '🇧🇩' },
  { name: 'Belgium', code: 'BE', country_flag: '🇧🇪' },
  { name: 'Brazil', code: 'BR', country_flag: '🇧🇷' },
  { name: 'Canada', code: 'CA', country_flag: '🇨🇦' },
  { name: 'China', code: 'CN', country_flag: '🇨🇳' },
  { name: 'Denmark', code: 'DK', country_flag: '🇩🇰' },
  { name: 'Egypt', code: 'EG', country_flag: '🇪🇬' },
  { name: 'France', code: 'FR', country_flag: '🇫🇷' },
  { name: 'Germany', code: 'DE', country_flag: '🇩🇪' },
  { name: 'India', code: 'IN', country_flag: '🇮🇳' },
  { name: 'Indonesia', code: 'ID', country_flag: '🇮🇩' },
  { name: 'Iran', code: 'IR', country_flag: '🇮🇷' },
  { name: 'Iraq', code: 'IQ', country_flag: '🇮🇶' },
  { name: 'Italy', code: 'IT', country_flag: '🇮🇹' },
  { name: 'Japan', code: 'JP', country_flag: '🇯🇵' },
  { name: 'Malaysia', code: 'MY', country_flag: '🇲🇾' },
  { name: 'Mexico', code: 'MX', country_flag: '🇲🇽' },
  { name: 'Netherlands', code: 'NL', country_flag: '🇳🇱' },
  { name: 'New Zealand', code: 'NZ', country_flag: '🇳🇿' },
  { name: 'Nigeria', code: 'NG', country_flag: '🇳🇬' },
  { name: 'Pakistan', code: 'PK', country_flag: '🇵🇰' },
  { name: 'Philippines', code: 'PH', country_flag: '🇵🇭' },
  { name: 'Russia', code: 'RU', country_flag: '🇷🇺' },
  { name: 'Saudi Arabia', code: 'SA', country_flag: '🇸🇦' },
  { name: 'South Africa', code: 'ZA', country_flag: '🇿🇦' },
  { name: 'South Korea', code: 'KR', country_flag: '🇰🇷' },
  { name: 'Spain', code: 'ES', country_flag: '🇪🇸' },
  { name: 'Sri Lanka', code: 'LK', country_flag: '🇱🇰' },
  { name: 'Turkey', code: 'TR', country_flag: '🇹🇷' },
  { name: 'United Arab Emirates', code: 'AE', country_flag: '🇦🇪' },
  { name: 'United Kingdom', code: 'GB', country_flag: '🇬🇧' },
  { name: 'United States', code: 'US', country_flag: '🇺🇸' },
  { name: 'Vietnam', code: 'VN', country_flag: '🇻🇳' },
];

const seedCountries = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');

    // Clear existing data
    await Country.deleteMany({});

    // Insert countries only (no states/cities)
    await Country.insertMany(countries);

    console.log(`✅ Seeded ${countries.length} countries successfully`);
    process.exit(0);

  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedCountries();
