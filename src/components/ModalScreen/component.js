import { mapGetters } from 'vuex';

import ErrorModal from '@/components/ModalScreen/ErrorModal';
import LoginRequirementModal from '@/components/ModalScreen/LoginRequirementModal';
import PurchaseFailureModal from '@/components/ModalScreen/PurchaseFailureModal';
import PurchaseSuccessModal from '@/components/ModalScreen/PurchaseSuccessModal';

export default {
  name: 'ModalScreen',
  components: {
    ErrorModal,
    LoginRequirementModal,
    PurchaseFailureModal,
    PurchaseSuccessModal,
  },
  computed: {
    ...mapGetters(['getModalComponentName', 'getModalComponentProps']),
  },
};
