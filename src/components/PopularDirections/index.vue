<template>
  <div class="PopularDirections">
    <h6 class="PopularDirections__title">Popularne kierunki:</h6>
    <div class="PopularDirections__content">
      <button class="PopularDirections__content--direction hover"
        v-for="direction in directions" :key="direction.id"
        @click="selectPopularDirection(direction.origin, direction.destination)">
        {{ direction.label }}
      </button>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
