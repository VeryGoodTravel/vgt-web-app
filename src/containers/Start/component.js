import { mapGetters, mapActions } from 'vuex';

import errors from '@/api/errors';

import LoginBar from '@/components/LoginBar';
import FilterSearchBar from '@/components/FilterSearchBar';

export default {
  name: 'Start',
  components: {
    LoginBar,
    FilterSearchBar,
  },
  computed: {
    ...mapGetters(['getAppTitle', 'getFilterData']),
    logo() {
      return require('@/assets/logo.svg');
    },
  },
  methods: {
    ...mapActions(['fetchFilterData',
      'setIsLoading', 'setLoadingMessage', 'clearLoadingMessage',
      'setIsModalOpen', 'setModalComponentName', 'setModalComponentProps',
    ]),
  },
  async beforeMount() {
    this.setLoadingMessage('Pobieranie dostępnych lokalizacji...');
    this.setIsLoading(true);
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
