import types from './mutation-types';

export default {
  [types.SET_LOGIN](state, payload) {
    state.login = payload;
  },
  [types.SET_TOKEN](state, payload) {
    state.token = payload;
  },
};
