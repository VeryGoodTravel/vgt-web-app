import { mapGetters, mapActions } from 'vuex';

import api from '@/api';
import LoginBar from '@/components/LoginBar';
import StarBar from '@/components/OfferCard/StarBar';

const { DateTime } = require('luxon');

export default {
  name: 'Details',
  components: {
    LoginBar,
    StarBar,
  },
  computed: {
    ...mapGetters(['getOfferDetails', 'getIsLoggedIn', 'getLogin', 'getToken']),
    id: {
      get() {
        return this.$route.params.id;
      },
      set(value) {
        this.$router.replace({
          params: {
            ...this.$route.params,
            id: value,
          },
        });
      },
    },
    offerDetails() {
      return this.getOfferDetails(this.id);
    },
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
      return this.offerDetails.image;
    },
    rating() {
      return this.offerDetails.rating ? this.offerDetails.rating / 5.0 : 0.0;
    },
    price() {
      return `${this.offerDetails.price.value.toFixed(2)} ${this.offerDetails.price.currency}`;
    },
    origin() {
      return this.offerDetails.origin.label;
    },
    destination() {
      return this.offerDetails.destination.label;
    },
    dateStart() {
      return DateTime.fromFormat(this.offerDetails.date.start, 'dd-MM-yyyy').toFormat('dd.MM.yyyy');
    },
    dateEnd() {
      return DateTime.fromFormat(this.offerDetails.date.end, 'dd-MM-yyyy').toFormat('dd.MM.yyyy');
    },
    duration() {
      const start = DateTime.fromFormat(this.offerDetails.date.start, 'dd-MM-yyyy');
      const end = DateTime.fromFormat(this.offerDetails.date.end, 'dd-MM-yyyy');
      const duration = end.diff(start, ['days']).toObject().days;
      const daysLabel = duration + 1 > 1 ? 'dni' : 'dzień';
      let nightLabel = duration === 0 || duration > 4 ? 'nocy' : 'noce';
      nightLabel = duration === 1 ? 'noc' : nightLabel;
      return `${duration + 1} ${daysLabel} / ${duration} ${nightLabel}`;
    },
  },
  methods: {
    ...mapActions(['fetchOfferDetails',
      'setIsLoading', 'setLoadingMessage', 'clearLoadingMessage',
      'setIsModalOpen', 'setModalComponentName', 'setModalComponentProps',
    ]),
    clickBack() {
      const previous = this.$router.options.history.state.back;
      if (/^\/offers\/[0-9]+$/.test(previous)) {
        this.$router.back();
      } else {
        this.$router.push({ name: 'Start' });
      }
    },
    async clickPurchase() {
      if (this.getIsLoggedIn) {
        this.setLoadingMessage('Rezerwowanie oferty..');
        this.setIsLoading(true);
        const requestData = {
          offer_id: this.offerDetails.id,
          login: this.getLogin,
          token: this.getToken,
        };
        const response = await api.PurchaseOffer(requestData);
        this.setIsLoading(false);
        this.clearLoadingMessage();
        if (!response.success) {
          this.setModalComponentName('PurchaseSuccessModal');
          this.setIsModalOpen(true);
        } else {
          this.setModalComponentProps({ 'message': response.message });
          this.setModalComponentName('PurchaseFailureModal');
          this.setIsModalOpen(true);
        }
      } else {
        this.setModalComponentName('LoginRequirementModal');
        this.setIsModalOpen(true);
      }
    },
  },
  async beforeMount() {
    this.setLoadingMessage('Pobieranie szczegółów oferty...');
    this.setIsLoading(true);
    await this.fetchOfferDetails(this.id);
    this.setIsLoading(false);
    this.clearLoadingMessage();
  },
};
