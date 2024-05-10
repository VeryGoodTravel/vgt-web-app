<template>
  <div class="StarBar">
    <div class="StarBar__counter-overlay" :style="{ width: `${ratingPercentage}%` }"></div>
    <span class="StarBar__star">★</span>
    <span class="StarBar__star">★</span>
    <span class="StarBar__star">★</span>
    <span class="StarBar__star">★</span>
    <span class="StarBar__star">★</span>
    <div class="StarBar__overlay" :style="{ width: `${ratingPercentage}%` }"></div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
