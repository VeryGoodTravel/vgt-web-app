import types from './mutation-types';

export default {
  [types.SET_DESTINATIONS](state, payload) {
    state.destinations = payload;
  },
  [types.SET_DATES](state, payload) {
    state.dates = payload;
  },
  [types.SET_ORIGINS](state, payload) {
    state.origins = payload;
  },
  [types.SET_PARTICIPANTS](state, payload) {
    state.participants = payload;
  },
  [types.SET_FILTER_DATA](state, payload) {
    state.filterData = payload;
  },
};
