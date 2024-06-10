import api from '@/api';

import types from './mutation-types';

export default {
  setPopularDirections({ commit }, value) {
    commit(types.SET_POPULAR_DIRECTIONS, value);
  },
  setPopularAccommodations({ commit }, value) {
    commit(types.SET_POPULAR_ACCOMMODATIONS, value);
  },
  async fetchPopularStatistics({ commit }) {
    try {
      const response = await api.GetPopularOffers();
      commit(types.SET_POPULAR_DIRECTIONS, response.directions);
      commit(types.SET_POPULAR_ACCOMMODATIONS, response.accommodations);
    } catch {
      // ignore any errors
    }
  },
  clearPopularDirections({ commit }) {
    commit(types.SET_POPULAR_DIRECTIONS, []);
  },
  clearPopularAccommodations({ commit }) {
    commit(types.SET_POPULAR_ACCOMMODATIONS, []);
  },
};
