(function (root) {
  var _bench;
  var CHANGE_EVENT = "change";
  root.SingleBenchStore = $.extend({}, EventEmitter.prototype, {

    currentBench: function () {
      return jQuery.extend({}, _bench);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    _changed: function () {
      this.emit(CHANGE_EVENT);
    },

    changeBench: function (bench) {
      _bench = bench;
    },

    dispatcherId: AppDispatcher.register(function (payload) {

      switch (payload.actionType) {
        case BenchConstants.BENCH_RECEIVED:
          SingleBenchStore.changeBench(payload.bench);
          SingleBenchStore._changed();
          break;
      }
    })


  });
})(this);
