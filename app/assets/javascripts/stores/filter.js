(function (root) {

  var _filter = {min: 1, max: 5};
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

    _updateMin: function (min) {
      _filter.min = min;
    },

    _updateMax: function (max) {
      _filter.max = max;
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
        case BenchConstants.MIN_CHANGED:
          FilterStore._updateMin(payload.min);
          FilterStore._changed();
          break;
        case BenchConstants.MAX_CHANGED:
          FilterStore._updateMax(payload.max);
          FilterStore._changed();
          break;
      }
    })
  });

})(this);
