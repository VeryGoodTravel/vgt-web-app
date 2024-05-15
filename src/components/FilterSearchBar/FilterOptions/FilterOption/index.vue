<template>
  <div class="FilterOption">
    <label class="FilterOption__label" :for="optionId">{{ option.label }}</label>
    <div class="FilterOption__bar">
      <button class="FilterOption__bar--button hover" :disabled="isMin" @click="decrement">−</button>
      <input class="FilterOption__bar--input" :id="optionId" type="number" readonly="true" :value="value"
        :min="option.min" :max="option.max" step="1" />
      <button class="FilterOption__bar--button hover" :disabled="isMax" @click="increment">+</button>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
