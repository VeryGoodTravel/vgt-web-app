<template>
  <div class="Start">
    <LoginBar class="Start__login" />
    <div class="Start__content">
      <div class="Start__content--title">
        <div class="Start__content--title-logo">
          <img class="Start__content--title-logo-image" :src="logo" />
        </div>
        <h1 class="Start__content--title-text">{{ getAppTitle }}</h1>
      </div>
      <div class="Start__content--search-bar">
        <FilterSearchBar :filterData="getFilterData" v-if="getFilterData"/>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
