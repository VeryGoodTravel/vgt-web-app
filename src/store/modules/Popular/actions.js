import api from '@/api';

import types from './mutation-types';

export default {
  setPopularDirections({ commit }, value) {
    commit(types.SET_POPULAR_DIRECTIONS, value);
  },
  setPopularAccomodations({ commit }, value) {
    commit(types.SET_POPULAR_ACCOMODATIONS, value);
  },
  async fetchPopularStatistics({ commit }) {
    try {
      const response = await api.GetPopularOffers();
      commit(types.SET_POPULAR_DIRECTIONS, response.popular_directions);
      commit(types.SET_POPULAR_ACCOMODATIONS, response.popular_accomodations);
    } catch {
      // ignore any errors
    }
  },
  clearPopularDirections({ commit }) {
    commit(types.SET_POPULAR_DIRECTIONS, []);
  },
  clearPopularAccomodations({ commit }) {
    commit(types.SET_POPULAR_ACCOMODATIONS, []);
  },
};
