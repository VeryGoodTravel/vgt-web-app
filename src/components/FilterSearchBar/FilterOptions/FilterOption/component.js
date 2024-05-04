export default {
  name: 'FilterOption',
  props: {
    option: Object,
  },
  data() {
    return {
      optionValue: this.option.min,
    };
  },
  emits: ['optionUpdate'],
  computed: {
    optionId() {
      return `option-${this.option.id}`;
    },
    value() {
      return this.optionValue;
    },
    isMax() {
      return this.optionValue >= this.option.max;
    },
    isMin() {
      return this.optionValue <= this.option.min;
    },
  },
  methods: {
    increment() {
      this.optionValue = this.optionValue < this.option.max ? this.optionValue + 1 : this.option.max;
      this.$emit('optionUpdate');
    },
    decrement() {
      this.optionValue = this.optionValue > this.option.min ? this.optionValue - 1 : this.option.min;
      this.$emit('optionUpdate');
    },
    getOptionValue() {
      return this.optionValue;
    },
  },
};
