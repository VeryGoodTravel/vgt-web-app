import actions from './actions';
import mutations from './mutations';

const INITIAL_STATE = {
  title: process.env.VUE_APP_TITLE,
};

const getters = {
  title: (state) => state.title,
};

export default {
  state: INITIAL_STATE,
  mutations,
  actions,
  getters,
};
