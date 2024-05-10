import api from '@/api';

import types from './mutation-types';

export default {
  setLogin({ commit }, login) {
    commit(types.SET_LOGIN, login);
  },
  setToken({ commit }, token) {
    commit(types.SET_TOKEN, token);
  },
  async LogIn({ commit }, { login, password }) {
    const requestData = { login, password };
    const response = await api.Login(requestData);
    commit(types.SET_LOGIN, login);
    commit(types.SET_TOKEN, response.token);
  },
  LogOut({ commit }) {
    commit(types.SET_LOGIN, '');
    commit(types.SET_TOKEN, '');
  },
};
