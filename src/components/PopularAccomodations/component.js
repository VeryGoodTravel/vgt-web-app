import StarBar from '@/components/OfferCard/StarBar';

export default {
  name: 'PopularAccomodations',
  components: {
    StarBar,
  },
  props: {
    accomodationsData: Array,
  },
  data() {
    return {
      page: 0,
    };
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
    accomodations() {
      return this.accomodationsData.slice(0, 12).map((element, index) => ({
        id: index,
        destination: element.destination.label,
        name: element.name,
        room: element.room,
        transportation: element.transportation,
        maintenance: element.maintenance,
        rating: element.rating / 5,
      }));
    },
    min() {
      return 0;
    },
    max() {
      return this.accomodations.length - 1;
    },
    canSwipeLeft() {
      return this.page > this.min;
    },
    canSwipeRight() {
      return this.page < this.max;
    },
  },
  methods: {
    swipeLeft() {
      this.page -= 1;
      this.page = this.page < this.min ? this.min : this.page;
    },
    swipeRight() {
      this.page += 1;
      this.page = this.page > this.max ? this.max : this.page;
    },
  },
};
