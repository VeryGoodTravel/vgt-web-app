import { mapGetters, mapActions } from 'vuex';

import LoginBar from '@/components/LoginBar';
import PaginationBar from '@/components/PaginationBar';
import OfferCard from '@/components/OfferCard';

export default {
  name: 'Offers',
  components: {
    LoginBar,
    PaginationBar,
    OfferCard,
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
    ...mapGetters(['getPageData', 'getSearchFilter']),
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
    ...mapActions(['fetchPageData', 'setIsLoading', 'setLoadingMessage', 'clearLoadingMessage']),
    clickBack() {
      this.$router.push({ name: 'Start' });
    },
  },
  async beforeMount() {
    this.setLoadingMessage('Pobieranie ofert...');
    this.setIsLoading(true);
    await this.fetchPageData({ page: this.page, searchFilter: this.getSearchFilter });
    this.setIsLoading(false);
    this.clearLoadingMessage();
  },
};
