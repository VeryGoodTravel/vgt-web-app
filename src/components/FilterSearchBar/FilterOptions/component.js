import FilterOption from '@/components/FilterSearchBar/FilterOptions/FilterOption';

export default {
  name: 'FilterOptions',
  components: {
    FilterOption,
  },
  props: {
    participants: Object,
  },
  data() {
    return {
      total: 0,
    };
  },
  computed: {
    options() {
      return this.participants.options;
    },
    min() {
      return this.participants.min;
    },
    max() {
      return this.participants.max;
    },
  },
  methods: {
    emitOptionsUpdate() {
      this.total = Object.values(this.getOptionsValues()).reduce((a, b) => a + b, 0);
      if (this.total === this.min) {
        this.disableDecrement(true);
        this.disableIncrement(false);
      } else if (this.total === this.max) {
        this.disableDecrement(false);
        this.disableIncrement(true);
      } else {
        this.disableDecrement(false);
        this.disableIncrement(false);
      }
      this.$emit('optionsUpdate');
    },
    getOptionsValues() {
      return this.$refs.options.reduce((acc, val) => {
        acc[val.$props.option.id] = val.getOptionValue();
        return acc;
      }, {});
    },
    clearOptionsValues() {
      this.$refs.options.forEach((option) => {
        option.clearOptionValue();
        option.disableDecrement(false);
        option.disableIncrement(false);
      });
    },
    disableDecrement(value) {
      this.$refs.options.forEach((option) => {
        option.disableDecrement(value);
      });
    },
    disableIncrement(value) {
      this.$refs.options.forEach((option) => {
        option.disableIncrement(value);
      });
    },
  },
  mounted() {
    this.emitOptionsUpdate();
  },
};
