import FilterCalendar from '@/components/FilterSearchBar/FilterCalendar';
import FilterList from '@/components/FilterSearchBar/FilterList';
import FilterOptions from '@/components/FilterSearchBar/FilterOptions';

import { mapActions } from 'vuex';
import filter from '@/schemas/responses/examples/GetFilters.example.json';

const { DateTime } = require('luxon');

export default {
  name: 'FilterSearchBar',
  components: {
    FilterCalendar,
    FilterList,
    FilterOptions,
  },
  props: {
    filterData: Object,
  },
  data() {
    return {
      destination: [],
      // date: {
      //   start: DateTime.now(),
      //   end: DateTime.now().plus({ days: 3 }),
      // },
      date: {
        start: DateTime.fromFormat(filter.dates.start, 'dd-MM-yyyy'),
        end: DateTime.fromFormat(filter.dates.start, 'dd-MM-yyyy').plus({ days: 3 }),
      },
      origin: [],
      participants: {},
      showDestinationMenu: false,
      showDateMenu: false,
      showOriginMenu: false,
      showParticipantsMenu: false,
    };
  },
  computed: {
    searchIcon() {
      return require('@/assets/search.svg');
    },
    destinationSelection() {
      if (this.destination.length === 0) {
        return 'Gdziekolwiek';
      } else if (this.destination.length > 1) {
        return this.destination.length <= 4
          ? `Wybrano ${this.destination.length} lokalizacje`
          : `Wybrano ${this.destination.length} lokalizacji`;
      } else {
        return this.destination[0].label.toString();
      }
    },
    dateSelection() {
      if (this.date.start.equals(this.date.end)) {
        return `${this.date.start.toFormat('dd.MM.yyyy')}`;
      } else {
        return `${this.date.start.toFormat('dd.MM.yyyy')} - ${this.date.end.toFormat('dd.MM.yyyy')}`;
      }
    },
    originSelection() {
      if (this.origin.length === 0) {
        return 'Skądkolwiek';
      } else if (this.origin.length > 1) {
        return this.origin.length <= 4
          ? `Wybrano ${this.origin.length} lokalizacje`
          : `Wybrano ${this.origin.length} lokalizacji`;
      } else {
        return this.origin[0].label.toString();
      }
    },
    participantsSelection() {
      const count = Object.values(this.participants).reduce((a, c) => a + c, 0);
      if (count === 0) {
        return 'Wybierz uczestników';
      } else if (count === 1) {
        return '1 osoba';
      } else {
        return count <= 4
          ? `${count} osoby`
          : `${count} osób`;
      }
    },
    destinationFilterData() {
      return this.filterData.destinations;
    },
    dateFilterData() {
      const daterange = {};
      Object.keys(this.filterData.dates).forEach((key) => {
        daterange[key] = DateTime.fromFormat(this.filterData.dates[key], 'dd-MM-yyyy');
      });
      return daterange;
    },
    originsFilterData() {
      return this.filterData.origins;
    },
    participantsFilterData() {
      return this.filterData.participants;
    },
  },
  methods: {
    ...mapActions(['setSearchFilter']),
    clickDestination() {
      this.showDestinationMenu = !this.showDestinationMenu;
      this.showDateMenu = false;
      this.showOriginMenu = false;
      this.showParticipantsMenu = false;
    },
    clickDate() {
      this.showDestinationMenu = false;
      this.showDateMenu = !this.showDateMenu;
      this.showOriginMenu = false;
      this.showParticipantsMenu = false;
    },
    clickOrigin() {
      this.showDestinationMenu = false;
      this.showDateMenu = false;
      this.showOriginMenu = !this.showOriginMenu;
      this.showParticipantsMenu = false;
    },
    clickParticipants() {
      this.showDestinationMenu = false;
      this.showDateMenu = false;
      this.showOriginMenu = false;
      this.showParticipantsMenu = !this.showParticipantsMenu;
    },
    clickSearch() {
      this.setSearchFilter({
        destinations: this.destination,
        dates: {
          start: this.date.start.toFormat('dd-MM-yyyy'),
          end: this.date.end.toFormat('dd-MM-yyyy'),
        },
        origins: this.origin,
        participants: Object.fromEntries(Object.entries(this.participants).filter((key, value) => value < 1)),
        page: 1,
      });
      this.$router.push({ path: 'offers' });
    },
    onDestinationUpdated() {
      const destinations = this.$refs.destination.getListValues();
      if (destinations.length) {
        this.destination = destinations;
      } else {
        this.destination = [];
      }
    },
    onOriginsUpdated() {
      const origins = this.$refs.origin.getListValues();
      if (origins.length) {
        this.origin = origins;
      } else {
        this.origin = [];
      }
    },
    onParticipantsUpdated() {
      this.participants = this.$refs.participant.getOptionsValues();
    },
  },
};
