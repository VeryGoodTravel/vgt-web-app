<template>
  <div class="PurchaseFailureModal">
    <span class="PurchaseFailureModal__message">
      {{ message }}
    </span>
    <button class="PurchaseFailureModal__button hover" type="submit" @click="clickOK">
      OK
    </button>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
