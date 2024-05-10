<template>
  <div class="Details">
    <nav class="Details__nav">
      <button class="Details__nav--button hover" @click="clickBack">➔</button>
      <LoginBar />
    </nav>
    <div class="Details__content" v-if="offerDetails">
      <div class="Details__content--offer">
        <div class="Details__content--offer-row space-between">
          <span class="Details__content--offer-row-title">{{ offerDetails.name }}</span>
          <StarBar :rating="rating" />
        </div>
        <div class="Details__content--offer-row center">
          <img :src="thumbnail" />
        </div>
        <div class="Details__content--offer-row">
          <span class="Details__content--offer-row-header">Szczegóły:</span>
        </div>
        <div class="Details__content--offer-row">
          <span class="Details__content--offer-row-detail">
            <img :src="roomIcon" /> {{ offerDetails.room }}
          </span>
        </div>
        <div class="Details__content--offer-row">
          <span class="Details__content--offer-row-detail">
            <img :src="transportationIcon" /> {{ offerDetails.transportation }}
          </span>
        </div>
        <div class="Details__content--offer-row">
          <span class="Details__content--offer-row-detail">
            <img :src="maintenanceIcon" /> {{ offerDetails.maintenance }}
          </span>
        </div>
      </div>
      <div class="Details__content--summary">
        <div class="Details__content--summary-row center">
          <span class="Details__content--summary-row-place">{{ origin }} ➔ {{ destination }}</span>
        </div>
        <div class="Details__content--summary-row center">
          <span class="Details__content--summary-row-date">{{ dateStart }} - {{ dateEnd }}</span>
        </div>
        <div class="Details__content--summary-row center">
          <span class="Details__content--summary-row-duration">({{ duration }})</span>
        </div>
        <div class="Details__content--summary-row center">
          <div class="Details__content--summary-row-spacer"></div>
        </div>
        <div class="Details__content--summary-row space-between">
          <span class="Details__content--summary-row-header">Łącznie:</span>
          <span class="Details__content--summary-row-price">{{ price }}</span>
        </div>
        <div class="Details__content--summary-row center">
          <button class="Details__content--summary-row-button hover" disabled v-if="!offerDetails.availability">
            Oferta niedostępna
          </button>
          <button class="Details__content--summary-row-button hover" v-else @click="clickPurchase">
            Zarezerwuj
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
