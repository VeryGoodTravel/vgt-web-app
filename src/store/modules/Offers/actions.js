import api from '@/api';

import types from './mutation-types';

export default {
  setPageData({ commit }, { page, data }) {
    commit(types.SET_PAGE_DATA, { 'page': page, 'data': data });
  },
  async fetchPageData({ commit }, { page, searchFilter }) {
    const requestData = JSON.parse(JSON.stringify(searchFilter));
    requestData.page = page;
    const response = await api.GetOfferPage(requestData);
    commit(types.SET_PAGE_DATA, { 'page': page, 'data': response });
  },
  clearAllPagesData({ commit }) {
    commit(types.SET_PAGES_DATA, {});
  },
  async fetchOfferDetails({ commit }, id) {
    const requestData = { offer_id: id };
    const response = await api.GetOfferDetails(requestData);
    commit(types.SET_OFFER_DETAILS, { 'id': id, 'data': response });
  },
  clearAllOffersDetails({ commit }) {
    commit(types.SET_OFFERS_DETAILS, {});
  },
};
