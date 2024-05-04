import validators from '@/validators';

const axios = require('axios').default;

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: parseInt(process.env.VUE_APP_API_TIMEOUT, 10),
  transformResponse: (data) => {
    const response = JSON.parse(data);
    if (!validators.envelope.isValid(response)) {
      throw Error('Error parsing response - invalid envelope');
    } else if (!response.success) {
      throw Error('Error parsing response - request failed');
    } else {
      return response.data;
    }
  },
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  responseEncoding: 'utf8',
});
