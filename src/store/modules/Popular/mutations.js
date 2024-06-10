import types from './mutation-types';

export default {
  [types.SET_POPULAR_DIRECTIONS](state, payload) {
    state.popularDirections = payload;
  },
  [types.SET_POPULAR_ACCOMMODATIONS](state, payload) {
    state.popularAccommodations = payload;
  },
};
