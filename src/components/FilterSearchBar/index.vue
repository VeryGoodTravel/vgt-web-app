<template>
  <div class="FilterSearchBar">
    <div class="FilterSearchBar__filter">
      <div class="FilterSearchBar__filter-header">Dokąd lecimy?</div>
      <div class="FilterSearchBar__filter-selection"></div>
    </div>
    <div class="FilterSearchBar__filter">
      <div class="FilterSearchBar__filter-header">Kiedy i na ile?</div>
      <div class="FilterSearchBar__filter-selection"></div>
    </div>
    <div class="FilterSearchBar__filter">
      <div class="FilterSearchBar__filter-header">Skąd wylatujemy?</div>
      <div class="FilterSearchBar__filter-selection"></div>
    </div>
    <div class="FilterSearchBar__filter">
      <div class="FilterSearchBar__filter-header">Z kim lecimy?</div>
      <div class="FilterSearchBar__filter-selection"></div>
    </div>
    <div class="FilterSearchBar__search">
      <img class="FilterSearchBar__search-image" :src="search_icon" />
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
