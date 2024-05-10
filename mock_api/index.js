const EnvelopeExample = require('../src/schemas/envelope/Envelope.example.json');
const GetFiltersExample = require('../src/schemas/responses/examples/GetFilters.example.json');
const GetOfferPageExample = require('../src/schemas/responses/examples/GetOfferPage.example.json');
const GetOfferDetailsExample = require('../src/schemas/responses/examples/GetOfferDetails.example.json');
const PurchaseOfferExample = require('../src/schemas/responses/examples/PurchaseOffer.example.json');
const LoginExample = require('../src/schemas/responses/examples/Login.example.json');

function wrappedResponse(data) {
  const wrapper = JSON.parse(JSON.stringify(EnvelopeExample));
  const response = JSON.parse(JSON.stringify(data));
  wrapper.data = response;
  return wrapper;
}

module.exports = () => ({
  GetFilters: wrappedResponse(GetFiltersExample),
  GetOfferPage: wrappedResponse(GetOfferPageExample),
  GetOfferDetails: wrappedResponse(GetOfferDetailsExample),
  PurchaseOffer: wrappedResponse(PurchaseOfferExample),
  Login: wrappedResponse(LoginExample),
});
