import validators from '@/validators';
import api from './api';
import endpoints from './endpoints';

export default async (requestData) => {
  if (!validators.requests.Login.isValid(requestData)) {
    throw Error('Error sending Login request - invalid request schema');
  }

  const response = await api.post(endpoints.Login, requestData);

  if (!validators.responses.Login.isValid(response.data)) {
    throw Error('Error parsing Login response - invalid response schema');
  } else {
    return response.data;
  }
};
