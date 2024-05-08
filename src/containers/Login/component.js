import { mapGetters, mapActions } from 'vuex';

import errors from '@/api/errors';

export default {
  name: 'Login',
  data() {
    return {
      alertMessage: '',
      login: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters(['getToken', 'getLogin']),
  },
  methods: {
    ...mapActions(['LogIn', 'setIsModalOpen', 'setModalComponentName', 'setModalComponentProps']),
    clickBack() {
      this.$router.routeBack(this.$router);
    },
    async clickLogin() {
      if (/^[a-zA-Z][a-zA-Z0-9_]{4,14}$/.test(this.login) && /^[a-zA-Z][a-zA-Z0-9_]{7,24}$/.test(this.password)) {
        this.alertMessage = '';
        try {
          await this.LogIn({ 'login': this.login, 'password': this.password });
        } catch (error) {
          if (error instanceof errors.SuccessFalseError) {
            this.login = '';
            this.password = '';
            this.alertMessage = 'Nieprawidłowy login lub hasło';
          } else {
            this.setModalComponentName('ErrorModal');
            this.setModalComponentProps({ message: 'System jest chwilowy niedostępny.', retry: true });
            this.setIsModalOpen(true);
            this.login = '';
            this.password = '';
          }
          return;
        }
        this.$router.routeBack(this.$router);
      } else {
        this.login = '';
        this.password = '';
        this.alertMessage = 'Nieprawidłowy login lub hasło';
      }
    },
  },
};
