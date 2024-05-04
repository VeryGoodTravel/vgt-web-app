import { createStore } from 'vuex';

import AppState from './modules/AppState';
import Config from './modules/Config';
import Offers from './modules/Offers';
import SearchFilters from './modules/SearchFilters';

export default createStore({
  modules: {
    AppState,
    Config,
    Offers,
    SearchFilters,
  },
});
