export default {
  getOrigins: (state) => state.origins,
  getDestinations: (state) => state.destinations,
  getDates: (state) => state.dates,
  getParticipants: (state) => state.participants,
  getSearchFilter: (state) => ({
    origins: state.origins,
    destinations: state.destinations,
    dates: state.dates,
    participants: state.participants,
  }),
  getIsSearchFilterSet: (state) => state.dates.start !== ''
    && state.dates.end !== ''
    && Object.keys(state.participants).length > 0,
  getFilterData: (state) => state.filterData,
};
