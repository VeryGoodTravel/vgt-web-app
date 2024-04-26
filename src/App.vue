<template>
  <router-view />
  <AppVersion />
</template>

<script>
import store from '@/store';

import AppVersion from '@/components/AppVersion';

export default {
  name: 'App',
  components: {
    AppVersion,
  },
  store,
};
</script>
