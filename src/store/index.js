import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import AppState from './modules/AppState';
import Auth from './modules/Auth';
import Offers from './modules/Offers';
import SearchFilters from './modules/SearchFilters';

export default createStore({
  modules: {
    AppState,
    Auth,
    Offers,
    SearchFilters,
  },
  plugins: [
    createPersistedState({
      paths: ['Auth', 'SearchFilters'],
      storage: window.sessionStorage,
    }),
  ],
});
