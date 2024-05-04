export default {
  getPageData: (state) => (page) => state.pagesData[page],
  getPagesData: (state) => state.pagesData,
};
