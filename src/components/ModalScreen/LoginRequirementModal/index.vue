<template>
  <div class="LoginRequirementModal">
    <span class="LoginRequirementModal__message">
      Tylko zalogowani użytkownicy mogą zarezerwować ofertę.
    </span>
    <div class="LoginRequirementModal__combo">
      <button class="LoginRequirementModal__combo--button hover" type="button" @click="clickBack">
        Powrót
      </button>
      <button class="LoginRequirementModal__combo--button hover" type="submit" @click="clickGo">
        Logowanie
      </button>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
