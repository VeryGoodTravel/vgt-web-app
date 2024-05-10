import { mapActions } from 'vuex';

export default {
  name: 'ErrorModal',
  props: {
    message: String,
    retry: false,
    back: false,
  },
  methods: {
    ...mapActions(['setIsModalOpen', 'clearModalComponent']),
    clickRetry() {
      this.setIsModalOpen(false);
      this.clearModalComponent();
      this.$router.go(0);
    },
    clickBack() {
      this.setIsModalOpen(false);
      this.clearModalComponent();
      this.$router.routeBack(this.$router);
    },
  },
};
