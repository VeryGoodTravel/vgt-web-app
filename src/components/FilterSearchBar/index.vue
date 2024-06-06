<template >
  <div class="FilterSearchBar">
    <div class="FilterSearchBar__filter">
      <div class="FilterSearchBar__filter-header">Dokąd lecimy?</div>
      <div class="FilterSearchBar__filter-selection hover" id="destination-selection"
        @click="clickDestination">{{ destinationSelection }}</div>
      <div class="FilterSearchBar__filter-menu" v-show="showDestinationMenu">
        <FilterList :list="destinationFilterData" id="destination-menu" ref="destination" @listUpdate="onDestinationUpdated" />
      </div>
    </div>
    <div class="FilterSearchBar__filter">
      <div class="FilterSearchBar__filter-header">Kiedy i na ile?</div>
      <div class="FilterSearchBar__filter-selection hover" id="date-selection"
        @click="clickDate">{{ dateSelection }}</div>
      <div class="FilterSearchBar__filter-menu" id="date-menu" v-show="showDateMenu">
        <FilterCalendar :dateRange="dateFilterData" v-model:date="date" />
      </div>
    </div>
    <div class="FilterSearchBar__filter">
      <div class="FilterSearchBar__filter-header">Skąd wylatujemy?</div>
      <div class="FilterSearchBar__filter-selection hover" id="origin-selection"
        @click="clickOrigin">{{ originSelection }}</div>
      <div class="FilterSearchBar__filter-menu" id="origin-menu" v-show="showOriginMenu">
        <FilterList :list="originsFilterData" ref="origin" @listUpdate="onOriginsUpdated" />
      </div>
    </div>
    <div class="FilterSearchBar__filter">
      <div class="FilterSearchBar__filter-header">Z kim lecimy?</div>
      <div class="FilterSearchBar__filter-selection hover" id="participants-selection"
        @click="clickParticipants">{{ participantsSelection }}</div>
      <div class="FilterSearchBar__filter-menu" id="participants-menu" v-show="showParticipantsMenu">
        <FilterOptions :participants="participantsFilterData" ref="participant" @optionsUpdate="onParticipantsUpdated" />
      </div>
    </div>
    <div class="FilterSearchBar__reset">
      <img class="FilterSearchBar__reset-image hover" :src="resetIcon" @click="clickReset" />
    </div>
    <div class="FilterSearchBar__search">
      <button class="FilterSearchBar__search-button hover" :disabled="!allowSearch" @click="clickSearch">
        <img class="FilterSearchBar__search-button-image" :src="searchIcon" />
      </button>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
