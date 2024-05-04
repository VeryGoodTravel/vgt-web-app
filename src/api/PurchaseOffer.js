import validators from '@/validators';
import api from './api';
import endpoints from './endpoints';

export default async (requestData) => {
  if (!validators.requests.PurchaseOffer.isValid(requestData)) {
    throw Error('Error sending PurchaseOffer request - invalid request schema');
  }

  const response = await api.post(endpoints.PurchaseOffer, requestData);

  if (!validators.responses.PurchaseOffer.isValid(response.data)) {
    throw Error('Error parsing PurchaseOffer response - invalid response schema');
  } else {
    return response.data;
  }
};
