import { mapActions } from 'vuex';

export default {
  name: 'PurchaseSuccessModal',
  methods: {
    ...mapActions(['setIsModalOpen', 'clearModalComponent']),
    clickOK() {
      this.setIsModalOpen(false);
      this.clearModalComponent();
    },
  },
};
