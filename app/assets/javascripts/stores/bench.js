(function (root) {
  var CHANGE_EVENT = "change";
  var HIGHLIGHT_CHANGE_EVENT = "highlight_change";
  var _benches = [];
  var _currentMouseOver = -1;

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _benches.slice();
    },

    resetBenches: function (benches) {
      _benches = benches;
    },

    currMouseOver: function () {
      return (this._currentMouseOver);
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

    addHighlightChangeListener: function (callback) {
      this.on(HIGHLIGHT_CHANGE_EVENT, callback);
    },

    removeHighlightChangeListener: function (callback) {
      this.removeListener(HIGHLIGHT_CHANGE_EVENT, callback);
    },

    _highlightChanged: function () {
      this.emit(HIGHLIGHT_CHANGE_EVENT);
    },

    mouseOver: function (id) {
      this._currentMouseOver = id;
      this._changed();
    },

    dispatcherId: AppDispatcher.register(function (payload) {

      switch (payload.actionType) {
        case BenchConstants.BENCHES_RECEIVED:
          BenchStore.resetBenches(payload.benches);
          BenchStore._changed();
          break;
        case BenchConstants.BENCH_HIGHLIGHTED:
          BenchStore.mouseOver(payload.benchId);
          BenchStore._highlightChanged();
          break;
      }
    })



  });

})(this);
