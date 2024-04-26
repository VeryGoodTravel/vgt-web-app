<template>
  <div class="Start">
    <div class="Start__title">
      <div class="Start__title-logo">
        <img class="Start__title-logo--image" :src="logo" />
      </div>
      <h1 class="Start__title-text">{{ title }}</h1>
    </div>
    <div class="Start__search-bar">
      <FilterSearchBar />
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
