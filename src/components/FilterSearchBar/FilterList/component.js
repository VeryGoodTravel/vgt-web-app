import FilterListItem from '@/components/FilterSearchBar/FilterList/FilterListItem';

export default {
  name: 'FilterList',
  components: {
    FilterListItem,
  },
  emits: ['listUpdate'],
  props: {
    list: Array,
  },
  methods: {
    emitListUpdate() {
      this.$emit('listUpdate');
    },
    getListValues() {
      return this.$refs.items.reduce((acc, val) => {
        const value = val.getItemValue();
        return value ? acc.concat(value) : acc;
      }, []);
    },
  },
};
