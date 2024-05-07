import { mapActions } from 'vuex';

export default {
  name: 'LoginRequirementModal',
  methods: {
    ...mapActions(['setIsModalOpen', 'clearModalComponent']),
    clickBack() {
      this.setIsModalOpen(false);
      this.clearModalComponent();
    },
    clickGo() {
      this.setIsModalOpen(false);
      this.clearModalComponent();
      this.$router.push({ name: 'Login' });
    },
  },
};
