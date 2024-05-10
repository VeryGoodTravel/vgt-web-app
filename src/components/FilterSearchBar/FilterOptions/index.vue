<template>
  <div class="FilterOptions">
    <FilterOption :option="option" v-for="option in options" :key="option.id" ref="options"
      @optionUpdate="emitOptionsUpdate" />
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
