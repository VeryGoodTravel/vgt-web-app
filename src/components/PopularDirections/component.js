export default {
  name: 'PopularDirections',
  props: {
    directionsData: Array,
  },
  emits: ['popularDirectionSelected'],
  computed: {
    directions() {
      return this.directionsData.slice(0, 12).map((element, index) => ({
        id: index,
        label: `${element.origin.label} ➔ ${element.destination.label}`,
        origin: element.origin.id,
        destination: element.destination.id,
      }));
    },
  },
  methods: {
    selectPopularDirection(origin, destination) {
      this.$emit('popularDirectionSelected', origin, destination);
    },
  },
};
