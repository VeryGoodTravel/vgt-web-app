import { mapGetters, mapActions } from 'vuex';

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
    ...mapActions(['LogIn']),
    clickBack() {
      const previous = this.$router.options.history.state.back;
      if (/^\/offers\/[0-9]+$/.test(previous) || /^\/details\/[a-zA-Z0-9-_]+$/.test(previous)) {
        this.$router.back();
      } else {
        this.$router.push({ name: 'Start' });
      }
    },
    async clickLogin() {
      if (/^[a-zA-Z][a-zA-Z0-9_]{4,14}$/.test(this.login) && /^[a-zA-Z][a-zA-Z0-9_]{7,24}$/.test(this.password)) {
        this.alertMessage = '';
        await this.LogIn({ 'login': this.login, 'password': this.password });

        const previous = this.$router.options.history.state.back;
        if (/^\/offers\/[0-9]+$/.test(previous) || /^\/details\/[a-zA-Z0-9-_]+$/.test(previous)) {
          this.$router.back();
        } else {
          this.$router.push({ name: 'Start' });
        }
      } else {
        this.alertMessage = 'Nieprawidłowy login lub hasło';
      }
    },
  },
};
