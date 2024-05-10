<template>
  <div class="FilterList">
    <FilterListItem :item="item" v-for="item in list" :key="item.id" ref="items" @itemUpdate="emitListUpdate" />
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
