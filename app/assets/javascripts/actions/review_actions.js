var ReviewActions = window.ReviewActions = {
  receiveAll: function (reviews) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.REVIEWS_RECEIVED,
      reviews: reviews
    });
  },

  receiveOne: function (review) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.REVIEW_RECEIVED,
      review: review
    });
  }
};
