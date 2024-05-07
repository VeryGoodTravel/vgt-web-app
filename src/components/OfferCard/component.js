import StarBar from '@/components/OfferCard/StarBar';

const { DateTime } = require('luxon');

export default {
  name: 'OfferCard',
  components: {
    StarBar,
  },
  props: {
    offer: Object,
  },
  computed: {
    roomIcon() {
      return require('@/assets/room.svg');
    },
    transportationIcon() {
      return require('@/assets/transportation.svg');
    },
    maintenanceIcon() {
      return require('@/assets/maintenance.svg');
    },
    thumbnail() {
      return this.offer.image;
    },
    rating() {
      return this.offer.rating ? this.offer.rating / 5.0 : 0.0;
    },
    price() {
      return `${this.offer.price.value.toFixed(2)} ${this.offer.price.currency}`;
    },
    dateStart() {
      return DateTime.fromFormat(this.offer.date.start, 'dd-MM-yyyy').toFormat('dd.MM.yyyy');
    },
    dateEnd() {
      return DateTime.fromFormat(this.offer.date.end, 'dd-MM-yyyy').toFormat('dd.MM.yyyy');
    },
  },
  methods: {
    clickDetails() {
      this.$router.push({ name: 'Details', params: { id: this.offer.id } });
    },
  },
};
