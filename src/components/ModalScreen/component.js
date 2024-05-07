import { mapGetters } from 'vuex';

import LoginRequirementModal from '@/components/ModalScreen/LoginRequirementModal';
import PurchaseFailureModal from '@/components/ModalScreen/PurchaseFailureModal';
import PurchaseSuccessModal from '@/components/ModalScreen/PurchaseSuccessModal';

export default {
  name: 'ModalScreen',
  components: {
    LoginRequirementModal,
    PurchaseFailureModal,
    PurchaseSuccessModal,
  },
  computed: {
    ...mapGetters(['getModalComponentName', 'getModalComponentProps']),
  },
};
