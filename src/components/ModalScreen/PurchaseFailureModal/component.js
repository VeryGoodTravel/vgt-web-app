import { mapActions } from 'vuex';

export default {
  name: 'PurchaseFailureModal',
  props: {
    message: String,
  },
  methods: {
    ...mapActions(['setIsModalOpen', 'clearModalComponent']),
    clickOK() {
      this.setIsModalOpen(false);
      this.clearModalComponent();
    },
  },
};
