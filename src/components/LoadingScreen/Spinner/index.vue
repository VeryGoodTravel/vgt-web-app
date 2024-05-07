<template>
  <div class="Spinner">
    <img class="Spinner__image" :src="logoV" :class="{ highlight: animateV }" />
    <img class="Spinner__image" :src="logoG" :class="{ highlight: animateG }" />
    <img class="Spinner__image" :src="logoT" :class="{ highlight: animateT }" />
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
