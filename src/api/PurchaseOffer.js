import validators from '@/validators';
import api from './api';
import endpoints from './endpoints';
import errors from './errors';

export default async (requestData) => {
  if (!validators.requests.PurchaseOffer.isValid(requestData)) {
    throw new errors.SchemaParsingError('Error sending PurchaseOffer request - invalid request schema');
  }

  const response = await api.post(endpoints.PurchaseOffer, requestData, { timeout: process.env.VUE_APP_API_PURCHASE_TIMEOUT });

  if (!validators.responses.PurchaseOffer.isValid(response.data)) {
    throw new errors.SchemaParsingError('Error parsing PurchaseOffer response - invalid response schema');
  } else {
    return response.data;
  }
};
