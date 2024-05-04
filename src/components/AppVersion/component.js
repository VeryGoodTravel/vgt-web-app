import { mapGetters } from 'vuex';

export default {
  name: 'AppVersion',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getAppTitle']),
    version() {
      return process.env.VUE_APP_VERSION;
    },
  },
};
