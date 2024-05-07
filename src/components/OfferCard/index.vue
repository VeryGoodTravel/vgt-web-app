<template>
  <div class="OfferCard">
    <div class="OfferCard__info">
      <img class="OfferCard__image" v-if="thumbnail" :src="thumbnail">
    </div>
    <div class="OfferCard__info">
      <div class="OfferCard__info--header">
        <div class="OfferCard__info--header-row">
          <span class="OfferCard__info--header-row-title">{{ offer.name }}</span>
          <StarBar :rating="rating" />
        </div>
        <div class="OfferCard__info--header-row">
          <div class="OfferCard__info--header-row-combo">
            <span>{{ offer.origin.label }}</span>
            <span class="OfferCard__info--header-row-combo-arrow">➔</span>
            <span>{{ offer.destination.label }}</span>
          </div>
          <div class="OfferCard__info--header-row-combo">
            <span>{{ dateStart }}</span>
            <span class="OfferCard__info--header-row-combo-arrow">➔</span>
            <span>{{ dateEnd }}</span>
          </div>
        </div>
      </div>
      <div class="OfferCard__info--content">
        <div class="OfferCard__info--content-column">
          <span class="OfferCard__info--content-column-detail">
            <img :src="roomIcon" /> {{ offer.room }}
          </span>
          <span class="OfferCard__info--content-column-detail">
            <img :src="transportationIcon" /> {{ offer.transportation }}
          </span>
          <span class="OfferCard__info--content-column-detail">
            <img :src="maintenanceIcon" /> {{ offer.maintenance }}
          </span>
        </div>
        <div class="OfferCard__info--content-column">
          <span class="OfferCard__info--content-column-price">{{ price }}</span>
          <button class="OfferCard__info--content-column-details hover" @click="clickDetails">Szczegóły</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
