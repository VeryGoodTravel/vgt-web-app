import { mapGetters } from 'vuex';

export default {
  name: 'PageSpinner',
  data() {
    return {
      timer: null,
      frame: 0,
    };
  },
  computed: {
    ...mapGetters(['getLoadingMessage']),
    logoV() {
      return require('@/assets/logo-v.svg');
    },
    logoG() {
      return require('@/assets/logo-g.svg');
    },
    logoT() {
      return require('@/assets/logo-t.svg');
    },
    animateV() {
      return this.frame === 0;
    },
    animateG() {
      return this.frame === 2;
    },
    animateT() {
      return this.frame === 1;
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.frame = (this.frame + 1) % 3;
    }, 250);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
