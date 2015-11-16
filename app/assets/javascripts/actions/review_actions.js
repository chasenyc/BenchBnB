var ReviewActions = window.ReviewActions = {
  receiveAll: function (reviews) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.REVIEWS_RECEIVED,
      reviews: reviews
    });
  }
};
