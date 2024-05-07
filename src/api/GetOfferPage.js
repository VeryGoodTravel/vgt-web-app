import validators from '@/validators';
import api from './api';
import endpoints from './endpoints';

export default async (requestData) => {
  if (!validators.requests.GetOfferPage.isValid(requestData)) {
    throw Error('Error sending GetOfferPage request - invalid request schema');
  }

  const response = await api.get(endpoints.GetOfferPage, {
    params: {
      origins: requestData.origins,
      destinations: requestData.destinations,
      dates: requestData.dates,
      participants: requestData.participants,
      page: requestData.page,
    },
  });

  if (!validators.responses.GetOfferPage.isValid(response.data)) {
    throw Error('Error parsing GetOfferPage response - invalid response schema');
  } else {
    return response.data;
  }
};
