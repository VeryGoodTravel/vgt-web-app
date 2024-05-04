<template>
  <div class="PaginationBar">
    <button class="PaginationBar__button hover" :disabled="prevDisabled" @click="prev">&lt;</button>
    <button class="PaginationBar__button hover" v-for="page in pages" :key="page.number"
      :class="{ ellipsis: page.number === '…', selected: page.number === currentPage }"
      :disabled="page.disabled" @click="clickPage(page.number)">{{ page.number }}</button>
    <button class="PaginationBar__button hover" :disabled="nextDisabled" @click="next">&gt;</button>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
