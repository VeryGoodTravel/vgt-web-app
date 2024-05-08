import validators from '@/validators';
import errors from './errors';

const axios = require('axios').default;

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: parseInt(process.env.VUE_APP_API_TIMEOUT, 10),
  transformResponse: (data) => {
    const response = JSON.parse(data);
    if (!validators.envelope.isValid(response)) {
      throw new errors.SchemaParsingError('Error parsing response envelope - invalid schema');
    } else if (!response.success) {
      throw new errors.SuccessFalseError('Error parsing response envelope - success false');
    } else {
      return response.data;
    }
  },
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  responseEncoding: 'utf8',
  validateStatus: (status) => status < 400, // throws AxiosError for http status 400 and 500
});
