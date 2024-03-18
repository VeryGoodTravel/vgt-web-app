<template>
  <router-view/>
</template>

<script>
  import store from '@/store';

  export default {
    name: 'App',
    store,
  };
</script>
