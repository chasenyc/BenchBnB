(function (root) {
  var _reviews = [];
  var _newReview = {};
  var CHANGE_EVENT = "change";
  root.ReviewStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _reviews.slice();
    },

    newestReview: function () {
      return jQuery.extend({}, _newReview);
    },

    resetReviews: function (reviews) {
      _reviews = reviews;
    },

    addNewReview: function (review) {
      _newReview = review;
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
        case BenchConstants.REVIEWS_RECEIVED:
          ReviewStore.resetReviews(payload.reviews);
          ReviewStore._changed();
          break;
        case BenchConstants.REVIEW_RECEIVED:
          ReviewStore.addNewReview(payload.review);
          ReviewStore._changed();
          break;
      }
    })

  });
})(this);
