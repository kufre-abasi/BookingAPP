import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions',
  params: {
    id: 'eyJ1ZmkiOi0yMDkyMTc0fQ==',
    sortBy: 'trending',
    page: '1',
    currency_code: 'INR',
    languagecode: 'en-us'
  },
  headers: {
    'x-rapidapi-key': '558ebf66bemshe6714643ab3108cp1c2522jsn12e0690dd16f',
    'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
  }
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
