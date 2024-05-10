import api from '@/api';

import types from './mutation-types';

export default {
  setDestinations({ commit }, destinations) {
    commit(types.SET_DESTINATIONS, destinations);
  },
  setDates({ commit }, dates) {
    commit(types.SET_DATES, dates);
  },
  setOrigins({ commit }, origins) {
    commit(types.SET_ORIGINS, origins);
  },
  setParticipants({ commit }, participants) {
    commit(types.SET_PARTICIPANTS, participants);
  },
  setSearchFilter({ commit }, filter) {
    commit(types.SET_DESTINATIONS, filter.destinations);
    commit(types.SET_DATES, filter.dates);
    commit(types.SET_ORIGINS, filter.origins);
    commit(types.SET_PARTICIPANTS, filter.participants);
  },
  clearSearchFilter({ commit }) {
    commit(types.SET_DESTINATIONS, []);
    commit(types.SET_DATES, { start: '', end: '' });
    commit(types.SET_ORIGINS, []);
    commit(types.SET_PARTICIPANTS, {});
  },
  async fetchFilterData({ commit }) {
    const response = await api.GetFilters();
    commit(types.SET_FILTER_DATA, response);
  },
  clearFilterData({ commit }) {
    commit(types.SET_FILTER_DATA, null);
  },
};
