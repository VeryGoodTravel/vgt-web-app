import types from './mutation-types';

export default {
  [types.SET_IS_LOADING](state, payload) {
    state.isLoading = payload;
  },
  [types.SET_LOADING_MESSAGE](state, payload) {
    state.loadingMessage = payload;
  },
  [types.SET_IS_MODAL_OPEN](state, payload) {
    state.isModalOpen = payload;
  },
  [types.SET_MODAL_COMPONENT_NAME](state, payload) {
    state.modalComponentName = payload;
  },
  [types.SET_MODAL_COMPONENT_PROPS](state, payload) {
    state.modalComponentProps = payload;
  },
};
