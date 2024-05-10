export default {
  getLogin: (state) => state.login,
  getToken: (state) => state.token,
  getIsLoggedIn: (state) => state.login !== '' && state.token !== '',
};
