<template>
  <div class="PageSpinner">
    <div class="PageSpinner__spinner">
      <img class="PageSpinner__spinner--image" :src="logoV" :class="{ highlight: animateV }" />
      <img class="PageSpinner__spinner--image" :src="logoG" :class="{ highlight: animateG }" />
      <img class="PageSpinner__spinner--image" :src="logoT" :class="{ highlight: animateT }" />
    </div>
    <span class="PageSpinner__message" v-if="getLoadingMessage">{{ getLoadingMessage }}</span>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
