<template>
  <div class="FilterCalendar">
    <DatePicker locale="pl" expanded trim-weeks transparent borderless is-dark color="gray"
      :min-date="dateRange.start" :max-date="dateRange.end" v-model.range="selectedDate" />
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
