import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'LoginBar',
  computed: {
    ...mapGetters(['getLogin']),
    userIcon() {
      return require('@/assets/user.svg');
    },
    loginText() {
      return this.getLogin ? this.getLogin : 'Zaloguj się';
    },
  },
  methods: {
    ...mapActions(['LogOut']),
    clickLogin() {
      if (this.getLogin) {
        this.LogOut();
      } else {
        this.$router.push({ name: 'Login' });
      }
    },
  },
};
