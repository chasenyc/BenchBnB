var FilterActions = window.FilterActions = {
  changeFilter: function (filterParams) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.PARAMS_CHANGED,
      filterParams: filterParams
    });
  },

  changeBounds: function (bounds) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BOUNDS_CHANGED,
      bounds: bounds
    });
  },

  changeMinMax: function (minMax) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.MINMAX_CHANGED,
      minMax: minMax
    });
  }

};
