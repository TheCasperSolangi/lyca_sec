require('dotenv').config();
const mongoose = require('mongoose');
const Country = require('./models/Country');

const MONGO_URI = process.env.MONGO_URI;

const seedPakistan = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');

    // Remove old Pakistan record if exists
    await Country.deleteOne({ code: 'PK' });

    // Helper function to convert array of strings to array of objects
    const formatCities = (cities) => cities.map(name => ({ name }));

    const pakistan = {
      name: 'Pakistan',
      code: 'PK',
      country_flag: '🇵🇰',
      states: [
        {
          name: 'Punjab',
          code: 'PB',
          cities: formatCities([
            "Lahore","Faisalabad","Rawalpindi","Gujranwala","Multan","Sialkot","Bahawalpur","Sargodha",
            "Sheikhupura","Rahim Yar Khan","Jhang","Kasur","Okara","Vehari","Mianwali","Attock",
            "Chiniot","Dera Ghazi Khan","Muzaffargarh","Pakpattan","Gujrat","Toba Tek Singh","Bhakkar",
            "Mandi Bahauddin","Narowal","Hafizabad","Khushab","Sahiwal","Khanewal","Layyah","Rajanpur",
            "Lodhran","Chakwal","Mian Channu","Kharian","Talagang","Kot Addu","Chishtian","Burewala",
            "Daska","Muridke","Khanpur","Kabirwala","Samundri","Jaranwala","Arifwala","Shahkot","Renala Khurd",
            "Kot Momin","Mailsi","Chak Jhumra","Nankana Sahib","Ahmadpur East","Hasilpur","Dipalpur",
            "Rajanpur City","Tandlianwala","Jampur","Mamu Kanjan","Sangla Hill","Fateh Jang","Kahuta",
            "Gujar Khan","Shorkot","Mianwali City","Haroonabad","Mian Channu","Raiwind","Chak 132","Fazilpur",
            "Sambrial","Kamalia","Gojra","Shahdadpur","Dinga","Wah Cantt"
          ])
        },
        {
          name: 'Sindh',
          code: 'SD',
          cities: formatCities([
            "Karachi","Hyderabad","Sukkur","Larkana","Nawabshah","Mirpurkhas","Jacobabad","Khairpur",
            "Dadu","Thatta","Badin","Shikarpur","Umerkot","Tando Adam","Sanghar","Kotri","Mehar","Matiari",
            "Qambar","Dadu City","Hala","Benazirabad"
          ])
        },
        {
          name: 'Khyber Pakhtunkhwa',
          code: 'KP',
          cities: formatCities([
            "Peshawar","Mardan","Abbottabad","Swat","Nowshera","Kohat","Charsadda","Mansehra",
            "Haripur","Bannu","Dera Ismail Khan","Batkhela","Timergara"
          ])
        },
        {
          name: 'Balochistan',
          code: 'BL',
          cities: formatCities([
            "Quetta","Gwadar","Turbat","Khuzdar","Chaman","Sibi","Zhob","Loralai"
          ])
        },
        {
          name: 'Azad Kashmir',
          code: 'AJK',
          cities: formatCities([
            "Muzaffarabad","Mirpur"
          ])
        },
        {
          name: 'Islamabad',
          code: 'ISB',
          cities: formatCities([
            "Islamabad"
          ])
        }
      ]
    };

    await Country.create(pakistan);

    console.log('✅ Pakistan (127 Cities) Seeded Successfully');
    process.exit(0);

  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedPakistan();
