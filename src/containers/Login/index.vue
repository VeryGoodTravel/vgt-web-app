<template>
  <div class="Login">
    <form class="Login__box" autocomplete="off" onsubmit="return false">
      <div class="Login__box--combo">
        <label class="Login__box--combo-label" for="login">Login:</label>
        <input class="Login__box--combo-input" type="text" id="login" v-model="login"/>
      </div>
      <div class="Login__box--combo">
        <label class="Login__box--combo-label" for="password">Hasło:</label>
        <input class="Login__box--combo-input" type="password" id="password" v-model="password"/>
      </div>
      <div class="Login__box--combo">
        <button class="Login__box--combo-button hover" type="button" @click="clickBack">Powrót</button>
        <button class="Login__box--combo-button hover" type="submit" @click="clickLogin">Zaloguj</button>
      </div>
      <span class="Login__box--alert" v-if="alertMessage">{{ alertMessage }}</span>
    </form>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
