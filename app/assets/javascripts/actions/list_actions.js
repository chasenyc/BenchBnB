var ListActions = window.ListActions = {
  mouseOver: function (benchId) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_HIGHLIGHTED,
      benchId: benchId
    });
  }
};
