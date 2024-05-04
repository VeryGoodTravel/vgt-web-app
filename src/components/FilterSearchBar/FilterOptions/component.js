import FilterOption from '@/components/FilterSearchBar/FilterOptions/FilterOption';

export default {
  name: 'FilterOptions',
  components: {
    FilterOption,
  },
  props: {
    options: Object,
  },
  methods: {
    emitOptionsUpdate() {
      this.$emit('optionsUpdate');
    },
    getOptionsValues() {
      return this.$refs.options.reduce((acc, val) => {
        acc[val.$props.option.id] = val.getOptionValue();
        return acc;
      }, {});
    },
  },
  mounted() {
    this.emitOptionsUpdate();
  },
};
