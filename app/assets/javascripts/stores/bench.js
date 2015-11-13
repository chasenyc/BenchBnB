(function (root) {
  var CHANGE_EVENT = "change";
  var _benches = [];

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _benches.slice();
    },

    resetBenches: function (benches) {
      _benches = benches;
      this._changed();
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

    dispatcherId: AppDispatcher.register(function (payload) {
      if (payload.actionType === BenchConstants.BENCHES_RECEIVED) {
        BenchStore.resetBenches(payload.benches);
      }
    })

  });

})(this);
