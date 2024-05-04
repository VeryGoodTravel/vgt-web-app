<template >
  <div class="FilterSearchBar">
    <div class="FilterSearchBar__filter">
      <div class="FilterSearchBar__filter-header">Dokąd lecimy?</div>
      <div class="FilterSearchBar__filter-selection hover" @click="clickDestination">{{ destinationSelection }}</div>
      <div class="FilterSearchBar__filter-menu" v-show="showDestinationMenu">
        <FilterList :list="destinationFilterData" ref="destination" @listUpdate="onDestinationUpdated" />
      </div>
    </div>
    <div class="FilterSearchBar__filter">
      <div class="FilterSearchBar__filter-header">Kiedy i na ile?</div>
      <div class="FilterSearchBar__filter-selection hover" @click="clickDate">{{ dateSelection }}</div>
      <div class="FilterSearchBar__filter-menu" v-show="showDateMenu">
        <FilterCalendar :dateRange="dateFilterData" v-model:date="date" />
      </div>
    </div>
    <div class="FilterSearchBar__filter">
      <div class="FilterSearchBar__filter-header">Skąd wylatujemy?</div>
      <div class="FilterSearchBar__filter-selection hover" @click="clickOrigin">{{ originSelection }}</div>
      <div class="FilterSearchBar__filter-menu" v-show="showOriginMenu">
        <FilterList :list="originsFilterData" ref="origin" @listUpdate="onOriginsUpdated" />
      </div>
    </div>
    <div class="FilterSearchBar__filter">
      <div class="FilterSearchBar__filter-header">Z kim lecimy?</div>
      <div class="FilterSearchBar__filter-selection hover" @click="clickParticipants">{{ participantsSelection }}</div>
      <div class="FilterSearchBar__filter-menu" v-show="showParticipantsMenu">
        <FilterOptions :options="participantsFilterData" ref="participant" @optionsUpdate="onParticipantsUpdated" />
      </div>
    </div>
    <div class="FilterSearchBar__search">
      <img class="FilterSearchBar__search-image hover" :src="searchIcon" @click="clickSearch" />
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
