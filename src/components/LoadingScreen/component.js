import { mapGetters } from 'vuex';

import Spinner from '@/components/LoadingScreen/Spinner';

export default {
  name: 'LoadingScreen',
  components: {
    Spinner,
  },
  computed: {
    ...mapGetters(['getLoadingMessage']),
  },
};
