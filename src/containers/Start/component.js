import { mapGetters, mapActions } from 'vuex';

import FilterSearchBar from '@/components/FilterSearchBar';

export default {
  name: 'Start',
  components: {
    FilterSearchBar,
  },
  computed: {
    ...mapGetters(['getAppTitle', 'getFilterData']),
    logo() {
      return require('@/assets/logo.svg');
    },
  },
  methods: {
    ...mapActions(['fetchFilterData', 'setIsLoading', 'setLoadingMessage', 'clearLoadingMessage']),
  },
  async beforeMount() {
    this.setLoadingMessage('Pobieranie dostępnych lokalizacji...');
    this.setIsLoading(true);
    await this.fetchFilterData();
    this.setIsLoading(false);
    this.clearLoadingMessage();
  },
};
