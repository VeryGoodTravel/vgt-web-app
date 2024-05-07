export default {
  getPageData: (state) => (page) => state.pagesData[page],
  getPagesData: (state) => state.pagesData,
  getOfferDetails: (state) => (id) => state.offersDetails[id],
  getOffersDetails: (state) => state.offersDetails,
};
