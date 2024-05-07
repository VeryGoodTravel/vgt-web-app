<template>
  <div class="ModalScreen">
    <component :is="getModalComponentName" v-bind="getModalComponentProps"></component>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
