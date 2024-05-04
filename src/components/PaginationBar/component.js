export default {
  name: 'PaginationBar',
  props: {
    total: Number,
    page: Number,
  },
  emits: ['update:page'],
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(value) {
        this.$emit('update:page', value);
      },
    },
    pages() {
      if (this.total < 6) {
        return Array.from({ length: this.total }, (_, i) => ({
          number: i + 1,
          disabled: i + 1 === this.currentPage,
        }));
      } else if (this.currentPage < 4) {
        const array = Array.from({ length: 7 }, (_, i) => ({
          number: i + 1,
          disabled: i + 1 === this.currentPage,
        }));
        array[5] = { number: '…', disabled: true };
        array[6].number = this.total;
        return array;
      } else if (this.currentPage >= this.total - 2) {
        const array = Array.from({ length: 7 }, (_, i) => ({
          number: this.total - 6 + i,
          disabled: this.total - 6 + i === this.currentPage,
        }));
        array[0].number = 1;
        array[1] = { number: '…', disabled: true };
        return array;
      } else {
        const array = Array.from({ length: 7 }, (_, i) => ({
          number: this.currentPage - 3 + i,
          disabled: this.currentPage - 3 + i === this.currentPage,
        }));
        array[0].number = 1;
        array[1] = { number: '…', disabled: true };
        array[5] = { number: '…', disabled: true };
        array[6].number = this.total;
        return array;
      }
    },
    prevDisabled() {
      return this.currentPage === 1;
    },
    nextDisabled() {
      return this.currentPage === this.total;
    },
  },
  methods: {
    clickPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    prev() {
      this.currentPage -= this.currentPage !== 1 ? 1 : 0;
    },
    next() {
      this.currentPage += this.currentPage !== this.total ? 1 : 0;
    },
  },
};
