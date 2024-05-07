<template>
  <div class="LoginBar">
    <div class="LoginBar__container hover" @click="clickLogin">
      <div class="LoginBar__container--logo">
        <img class="LoginBar__container--logo-image" :src="userIcon" />
      </div>
      <div class="LoginBar__container--login">
        <span class="LoginBar__container--login-text">{{ loginText }}</span>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
