<template>
  <details class="FilterListItem" :class="{ 'Leaf': !hasSubitems, 'Root': hasSubitems }">
    <summary class="FilterListItem__item">
      <input class="FilterListItem__item--checkbox" type="checkbox" ref="checkbox" @click="handleItemClick" />
      <span class="FilterListItem__item--label">{{ item.label }}</span>
      <img class="FilterListItem__item--chevron" :src="chevronIcon" v-if="hasSubitems" />
    </summary>
    <div class="FilterListItem__sublist" v-if="hasSubitems">
      <FilterListItem :item="subitem" v-for="subitem in item.locations" :key="subitem.id" ref="items"
        @itemUpdate="handleSubitemClick" />
    </div>
  </details>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
