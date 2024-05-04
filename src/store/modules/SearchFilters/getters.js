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
  getFilterData: (state) => state.filterData,
};
