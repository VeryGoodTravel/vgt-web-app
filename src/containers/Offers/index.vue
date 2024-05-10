<template>
  <div class="Offers">
    <nav class="Offers__nav">
      <button class="Offers__nav--button hover" @click="clickBack">➔</button>
      <PaginationBar class="Offers__nav--pagination" v-if="pageData" :total="pageData.pages.total"
        v-model:page="page" />
      <LoginBar class="Offers__nav--login" />
    </nav>
    <div class="Offers__list" v-if="pageData">
      <OfferCard v-for="offer in pageData.offers" :key="offer.id" :offer="offer" />
    </div>
    <nav class="Offers__nav">
      <PaginationBar class="Offers__nav--pagination" v-if="pageData" :total="pageData.pages.total"
        v-model:page="page" />
    </nav>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
