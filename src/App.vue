<template>
  <LoadingScreen v-if="getIsLoading" />
  <ModalScreen v-else-if="getIsModalOpen" />
  <router-view v-show="!getIsLoading && !getIsModalOpen" />
  <AppVersion />
</template>

<script>
import store from '@/store';
import { mapGetters } from 'vuex';

import AppVersion from '@/components/AppVersion';
import LoadingScreen from '@/components/LoadingScreen';
import ModalScreen from '@/components/ModalScreen';

export default {
  name: 'App',
  components: {
    AppVersion,
    LoadingScreen,
    ModalScreen,
  },
  computed: {
    ...mapGetters(['getIsLoading', 'getIsModalOpen']),
  },
  store,
};
</script>
