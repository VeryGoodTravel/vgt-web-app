import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import AppState from './modules/AppState';
import Auth from './modules/Auth';
import Config from './modules/Config';
import Offers from './modules/Offers';
import SearchFilters from './modules/SearchFilters';

export default createStore({
  modules: {
    AppState,
    Auth,
    Config,
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
