import { mapGetters, mapActions } from 'vuex';

import errors from '@/api/errors';

import LoginBar from '@/components/LoginBar';
import FilterSearchBar from '@/components/FilterSearchBar';
import PopularDirections from '@/components/PopularDirections';

export default {
  name: 'Start',
  components: {
    LoginBar,
    FilterSearchBar,
    PopularDirections,
  },
  computed: {
    ...mapGetters(['getAppTitle', 'getFilterData', 'getPopularDirections']),
    logo() {
      return require('@/assets/logo.svg');
    },
  },
  methods: {
    ...mapActions(['fetchFilterData', 'fetchPopularStatistics',
      'setIsLoading', 'setLoadingMessage', 'clearLoadingMessage',
      'setIsModalOpen', 'setModalComponentName', 'setModalComponentProps',
    ]),
    handlePopularDirectionSelected(origin, destination) {
      this.$refs.searchBar.setOriginsValues([origin]);
      this.$refs.searchBar.setDestinationValues([destination]);
    },
  },
  async beforeMount() {
    this.setLoadingMessage('Pobieranie dostępnych lokalizacji...');
    this.setIsLoading(true);
    this.fetchPopularStatistics();
    try {
      await this.fetchFilterData();
    } catch (error) {
      if (error instanceof errors.SuccessFalseError) {
        this.setModalComponentName('ErrorModal');
        this.setModalComponentProps({ message: 'Aktualnie nie posiadamy żadnych dostępnych ofert.' });
        this.setIsModalOpen(true);
      } else {
        this.setModalComponentName('ErrorModal');
        this.setModalComponentProps({ message: 'System jest chwilowy niedostępny.', retry: true });
        this.setIsModalOpen(true);
      }
    } finally {
      this.setIsLoading(false);
      this.clearLoadingMessage();
    }
  },
};
