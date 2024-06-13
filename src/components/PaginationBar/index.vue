<template>
  <div class="PaginationBar">
    <button class="PaginationBar__button hover" :disabled="prevDisabled" @click="prev">
      <span class="PaginationBar__button--text">&lt;</span>
    </button>
    <button class="PaginationBar__button hover" v-for="page in pages" :key="page.number"
      :class="{ ellipsis: page.number === '…', selected: page.number === currentPage }"
      :disabled="page.disabled" @click="clickPage(page.number)">
      <span class="PaginationBar__button--text">{{ page.number }}</span>
    </button>
    <button class="PaginationBar__button hover" :disabled="nextDisabled" @click="next">
      <span class="PaginationBar__button--text">&gt;</span>
    </button>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
