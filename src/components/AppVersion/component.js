import { mapGetters } from 'vuex';

export default {
  name: 'AppVersion',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['title']),
    version() {
      return process.env.VUE_APP_VERSION;
    },
  },
};
