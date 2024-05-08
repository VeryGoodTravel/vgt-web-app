import validators from '@/validators';
import api from './api';
import endpoints from './endpoints';
import errors from './errors';

export default async (requestData) => {
  if (!validators.requests.GetOfferPage.isValid(requestData)) {
    console.log(requestData);
    throw new errors.SchemaParsingError('Error sending GetOfferPage request - invalid request schema');
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
    throw new errors.SchemaParsingError('Error parsing GetOfferPage response - invalid response schema');
  } else {
    return response.data;
  }
};
