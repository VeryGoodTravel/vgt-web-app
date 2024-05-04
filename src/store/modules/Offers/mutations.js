import types from './mutation-types';

export default {
  [types.SET_PAGE_DATA](state, payload) {
    state.pagesData[payload.page] = payload.data;
  },
  [types.SET_PAGES_DATA](state, payload) {
    state.pagesData = payload;
  },
};
