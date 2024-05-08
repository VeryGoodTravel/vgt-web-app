<template>
  <div class="ErrorModal">
    <span class="ErrorModal__message">
      {{ message }}
    </span>
    <button class="ErrorModal__button hover" type="submit" v-if="retry" @click="clickRetry">
      Spróbuj ponownie
    </button>
    <button class="ErrorModal__button hover" type="submit" v-else-if="back" @click="clickBack">
      Powrót
    </button>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
