import validators from '@/validators';
import api from './api';
import endpoints from './endpoints';

export default async (requestData) => {
  if (!validators.requests.GetOfferDetails.isValid(requestData)) {
    throw Error('Error sending GetOfferDetails request - invalid request schema');
  }

  const response = await api.get(endpoints.GetOfferDetails, {
    params: {
      offer_id: requestData.id,
    },
  });

  if (!validators.responses.GetOfferDetails.isValid(response.data)) {
    throw Error('Error parsing GetOfferDetails response - invalid response schema');
  } else {
    return response.data;
  }
};
