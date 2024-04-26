import { mapGetters } from 'vuex';

import FilterSearchBar from '@/components/FilterSearchBar';

export default {
  name: 'Start',
  components: {
    FilterSearchBar,
  },
  computed: {
    ...mapGetters(['title']),
    logo() {
      return require('@/assets/logo.svg');
    },
  },
};
