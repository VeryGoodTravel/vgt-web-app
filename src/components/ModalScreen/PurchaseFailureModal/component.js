import { mapActions } from 'vuex';

export default {
  name: 'PurchaseFailureModal',
  props: {
    message: String,
  },
  computed: {
    modalMessage() {
      return this.message && this.message !== '' ? this.message : 'Transakcja nie powiodła się';
    },
  },
  methods: {
    ...mapActions(['setIsModalOpen', 'clearModalComponent']),
    clickOK() {
      this.setIsModalOpen(false);
      this.clearModalComponent();
    },
  },
};
