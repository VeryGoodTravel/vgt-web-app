export default {
  name: 'StarBar',
  props: {
    rating: Number,
  },
  computed: {
    ratingPercentage() {
      return this.rating * 100;
    },
  },
};
