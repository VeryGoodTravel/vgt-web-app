export default {
  getAppTitle: (state) => state.appTitle,
  getIsLoading: (state) => state.isLoading,
  getLoadingMessage: (state) => state.loadingMessage,
  getIsModalOpen: (state) => state.isModalOpen,
  getModalComponentName: (state) => state.modalComponentName,
  getModalComponentProps: (state) => state.modalComponentProps,
};
