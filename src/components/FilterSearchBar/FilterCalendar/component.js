import { DatePicker } from 'v-calendar';

const { DateTime } = require('luxon');

export default {
  name: 'FilterCalendar',
  components: {
    DatePicker,
  },
  props: {
    date: Object,
    dateRange: Object,
  },
  emits: ['update:date'],
  computed: {
    selectedDate: {
      get() {
        return this.date;
      },
      set(value) {
        this.$emit('update:date', { start: DateTime.fromJSDate(value.start), end: DateTime.fromJSDate(value.end) });
      },
    },
  },
};
