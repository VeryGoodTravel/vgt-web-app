import types from './mutation-types';

export default {
  setIsLoading({ commit }, value) {
    commit(types.SET_IS_LOADING, value);
  },
  setLoadingMessage({ commit }, message) {
    commit(types.SET_LOADING_MESSAGE, message);
  },
  clearLoadingMessage({ commit }) {
    commit(types.SET_LOADING_MESSAGE, '');
  },
  setIsModalOpen({ commit }, value) {
    commit(types.SET_IS_MODAL_OPEN, value);
  },
  setModalComponentName({ commit }, name) {
    commit(types.SET_MODAL_COMPONENT_NAME, name);
  },
  setModalComponentProps({ commit }, props) {
    commit(types.SET_MODAL_COMPONENT_PROPS, props);
  },
  clearModalComponent({ commit }) {
    commit(types.SET_MODAL_COMPONENT_NAME, '');
    commit(types.SET_MODAL_COMPONENT_PROPS, {});
  },
};
