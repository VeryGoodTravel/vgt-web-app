import validators from '@/validators';
import api from './api';
import endpoints from './endpoints';
import errors from './errors';

export default async () => {
  const response = await api.get(endpoints.GetPopularOffers, { baseURL: process.env.VUE_APP_API_STATS_URL_VALUE });
  if (!validators.responses.GetPopularOffers.isValid(response.data)) {
    throw new errors.SchemaParsingError('Error parsing GetPopularOffers response - invalid schema');
  } else {
    return response.data;
  }
};
