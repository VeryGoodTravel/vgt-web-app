<template>
  <div class="PopularAccommodations">
    <button class="PopularAccommodations__button left hover" :disabled="!canSwipeLeft" @click="swipeLeft">&lt;</button>
    <button class="PopularAccommodations__button right hover" :disabled="!canSwipeRight" @click="swipeRight">&gt;</button>
    <h6 class="PopularAccommodations__title">Popularne hotele</h6>
    <div class="PopularAccommodations__card" v-for="accommodation in accommodations"
      :key="accommodation.id" v-show="accommodation.id === page">
      <div class="PopularAccommodations__card--row">
        <h6 class="PopularAccommodations__card--row-name">{{ accommodation.name }}</h6>
        <StarBar :rating="accommodation.rating" />
      </div>
      <div class="PopularAccommodations__card--row">
        <div class="PopularAccommodations__card--row-column">
          <span class="PopularAccommodations__card--row-column-detail">
            <img :src="roomIcon" /> {{ accommodation.room }}
          </span>
          <span class="PopularAccommodations__card--row-column-detail">
            <img :src="transportationIcon" /> {{ accommodation.transportation }}
          </span>
          <span class="PopularAccommodations__card--row-column-detail">
            <img :src="maintenanceIcon" /> {{ accommodation.maintenance }}
          </span>
        </div>
        <div class="PopularAccommodations__card--row-column">
          <span class="PopularAccommodations__card--row-column-destination">{{ accommodation.destination }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
