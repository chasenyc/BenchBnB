var ReviewIndex = React.createClass ({
  getInitialState: function () {
    return {reviews: ReviewStore.all()};
  },

  componentDidMount: function () {
    ReviewStore.addChangeListener(this.changed);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchReviews(newProps.benchId);
  },

  changed: function () {
    this.setState({reviews: ReviewStore.all()});
  },

  averageRating: function () {
    var avg;
    if (this.state.reviews.length > 0) {
      var ratingSum = 0;
      this.state.reviews.forEach(function (review) {
        ratingSum += review.rating;
      });
      avg = (ratingSum / this.state.reviews.length);
    }
    return avg;
  },

  render: function () {
    return (
      <ul className="reviews-index">
        <div>
          Average Rating: {this.averageRating()}
        </div>

        {
          this.state.reviews.map(function (review) {
            return(
              <li key={review.id}>
                Rating: {review.rating}
                Review: {review.body}
              </li>
            )
          }.bind(this))
        }
      </ul>
    );
  }
});
