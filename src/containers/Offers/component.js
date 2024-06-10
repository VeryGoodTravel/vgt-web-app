import { mapGetters, mapActions } from 'vuex';

import errors from '@/api/errors';

import LoginBar from '@/components/LoginBar';
import PaginationBar from '@/components/PaginationBar';
import OfferCard from '@/components/OfferCard';
import PopularAccommodations from '@/components/PopularAccommodations';

export default {
  name: 'Offers',
  components: {
    LoginBar,
    PaginationBar,
    OfferCard,
    PopularAccommodations,
  },
  watch: {
    async page(newPage, _) {
      this.setLoadingMessage('Pobieranie ofert...');
      this.setIsLoading(true);
      await this.fetchPageData({ page: newPage, searchFilter: this.getSearchFilter });
      this.setIsLoading(false);
      this.clearLoadingMessage();
    },
  },
  computed: {
    ...mapGetters(['getPageData', 'getSearchFilter', 'getIsSearchFilterSet', 'getPopularAccommodations']),
    page: {
      get() {
        return parseInt(this.$route.params.page, 10);
      },
      set(value) {
        this.$router.replace({
          params: {
            ...this.$route.params,
            page: value,
          },
        });
      },
    },
    pageData() {
      return this.getPageData(this.page);
    },
  },
  methods: {
    ...mapActions(['fetchPageData', 'fetchPopularStatistics',
      'setIsLoading', 'setLoadingMessage', 'clearLoadingMessage',
      'setIsModalOpen', 'setModalComponentName', 'setModalComponentProps',
    ]),
    clickBack() {
      this.$router.push({ name: 'Start' });
    },
  },
  async beforeMount() {
    if (this.getIsSearchFilterSet) {
      this.setLoadingMessage('Pobieranie ofert...');
      this.setIsLoading(true);
      this.fetchPopularStatistics();
      try {
        await this.fetchPageData({ page: this.page, searchFilter: this.getSearchFilter });
      } catch (error) {
        if (error instanceof errors.SuccessFalseError) {
          this.setModalComponentName('ErrorModal');
          this.setModalComponentProps({ message: 'Nie znaleźliśmy żadnych ofert spełniających kryteria.', back: true });
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
    } else {
      this.$router.routeBack(this.$router);
    }
  },
};
