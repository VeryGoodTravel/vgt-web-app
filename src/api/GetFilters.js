import validators from '@/validators';
import api from './api';
import endpoints from './endpoints';

export default async () => {
  const response = await api.get(endpoints.GetFilters);
  if (!validators.responses.GetFilters.isValid(response.data)) {
    throw Error('Error parsing GetFilters response - invalid schema');
  } else {
    return response.data;
  }
};
