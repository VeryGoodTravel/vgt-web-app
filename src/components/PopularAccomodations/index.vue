<template>
  <div class="PopularAccomodations">
    <button class="PopularAccomodations__button left hover" :disabled="!canSwipeLeft" @click="swipeLeft">&lt;</button>
    <button class="PopularAccomodations__button right hover" :disabled="!canSwipeRight" @click="swipeRight">&gt;</button>
    <h6 class="PopularAccomodations__title">Popularne hotele</h6>
    <div class="PopularAccomodations__card" v-for="accomodation in accomodations"
      :key="accomodation.id" v-show="accomodation.id === page">
      <div class="PopularAccomodations__card--row">
        <h6 class="PopularAccomodations__card--row-name">{{ accomodation.name }}</h6>
        <StarBar :rating="accomodation.rating" />
      </div>
      <div class="PopularAccomodations__card--row">
        <div class="PopularAccomodations__card--row-column">
          <span class="PopularAccomodations__card--row-column-detail">
            <img :src="roomIcon" /> {{ accomodation.room }}
          </span>
          <span class="PopularAccomodations__card--row-column-detail">
            <img :src="transportationIcon" /> {{ accomodation.transportation }}
          </span>
          <span class="PopularAccomodations__card--row-column-detail">
            <img :src="maintenanceIcon" /> {{ accomodation.maintenance }}
          </span>
        </div>
        <div class="PopularAccomodations__card--row-column">
          <span class="PopularAccomodations__card--row-column-destination">{{ accomodation.destination }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
