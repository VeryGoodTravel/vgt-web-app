const { DateTime } = require('luxon');

export default {
  name: 'FilterSearchBar',
  data() {
    return {
      destination: 'any',
      date: {
        from: DateTime.now().toFormat('dd-mm-yyyy'),
        to: DateTime.now().plus({ days: 3 }).toFormat('dd-mm-yyyy'),
      },
      origin: 'any',
      participants: {},
    };
  },
  computed: {
    search_icon() {
      return require('@/assets/search.svg');
    },
  },
  methods: {

  },
};
