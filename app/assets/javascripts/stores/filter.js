(function (root) {

  var _filter = {};
  var CHANGE_EVENT = 'change';

  root.FilterStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return jQuery.extend({}, _filter);
    },

    _updateFilter: function (filterParams) {
      _filter = filterParams;
    },

    _updateBounds: function (bounds) {
      _filter.bounds = bounds;
    },

    _updateMinMax: function (minMax) {
      _filter.min = minMax.min;
      _filter.max = minMax.max;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    _changed: function () {
      console.log("emitting");
      this.emit(CHANGE_EVENT);
    },

    dispatcherId: AppDispatcher.register(function (payload) {

      switch (payload.actionType) {
        case BenchConstants.PARAMS_CHANGED:
          FilterStore._updateFilter(payload.filterParams);
          FilterStore._changed();
          break;
        case BenchConstants.BOUNDS_CHANGED:
          FilterStore._updateBounds(payload.bounds);
          FilterStore._changed();
          break;
        case BenchConstants.MINMAX_CHANGED:
          FilterStore._updateMinMax(payload.minMax);
          FilterStore._changed();
          break;
      }
    })
  });

})(this);
