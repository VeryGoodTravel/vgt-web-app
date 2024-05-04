<template>
  <PageSpinner v-if="getIsLoading" />
  <router-view v-show="!getIsLoading" />
  <AppVersion />
</template>

<script>
import store from '@/store';
import { mapGetters } from 'vuex';

import AppVersion from '@/components/AppVersion';
import PageSpinner from '@/components/PageSpinner';

export default {
  name: 'App',
  components: {
    AppVersion,
    PageSpinner,
  },
  computed: {
    ...mapGetters(['getIsLoading']),
  },
  store,
};
</script>
