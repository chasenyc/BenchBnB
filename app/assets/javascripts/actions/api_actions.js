var ApiActions = window.ApiActions = {
  receiveAll: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveOne: function (bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_RECEIVED,
      bench: bench
    });
  },
};
