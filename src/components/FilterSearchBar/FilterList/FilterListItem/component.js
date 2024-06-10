export default {
  name: 'FilterListItem',
  props: {
    item: Object,
  },
  emits: ['itemUpdate'],
  computed: {
    hasSubitems() {
      if (this.item.locations) {
        return true;
      } else {
        return false;
      }
    },
    chevronIcon() {
      return require('@/assets/chevron.svg');
    },
  },
  methods: {
    handleItemClick() {
      if (this.item.locations) {
        if (this.$refs.checkbox.checked) {
          this.$refs.items.forEach((item) => {
            item.$refs.checkbox.checked = true;
          });
        } else {
          this.$refs.items.forEach((item) => {
            item.$refs.checkbox.checked = false;
          });
        }
      }
      this.emitItemUpdate();
    },
    handleSubitemClick() {
      const checkedCount = this.$refs.items.reduce((acc, val) => val.$refs.checkbox.checked ? acc + 1 : acc, 0);
      if (checkedCount && !this.$refs.checkbox.checked) {
        this.$refs.checkbox.checked = true;
      } else if (!checkedCount && this.$refs.checkbox.checked) {
        this.$refs.checkbox.checked = false;
      }
      this.emitItemUpdate();
    },
    emitItemUpdate() {
      this.$emit('itemUpdate');
    },
    setItemValue(ids) {
      if (ids.includes(this.item.id)) {
        this.$refs.checkbox.checked = true;
        this.handleItemClick();
      } else if (this.item.locations) {
        this.$refs.items.forEach((item) => {
          item.setItemValue(ids);
        });
      }
    },
    getItemValue() {
      if (this.item.locations) {
        return this.$refs.items.reduce((acc, val) => {
          const value = val.getItemValue();
          return value ? acc.concat(value) : acc;
        }, []);
      } else {
        return this.$refs.checkbox.checked ? { id: this.item.id, label: this.item.label } : null;
      }
    },
    clearItemValue() {
      if (this.item.locations) {
        this.$refs.items.forEach((item) => {
          item.clearItemValue();
        });
      }
      this.$refs.checkbox.checked = false;
    },
  },
};
