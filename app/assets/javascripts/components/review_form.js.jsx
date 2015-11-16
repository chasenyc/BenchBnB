var ReviewForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {body: "", button: true};
  },

  componentDidMount: function () {
    ReviewStore.addChangeListener(this.submitted);
  },

  handleSubmit: function (e) {
    e.preventDefault();
    this.setState({button: false});
    var rating = e.target.rating.value;
    var body = e.target.body.value;
    var bench_id = parseInt(this.props.params.id);
    ApiUtil.createReview({rating: rating, body: body}, bench_id);
  },

  submitted: function () {
    this.setState({body: "", button: true});
  },

  render: function () {

    return (
      <div className="review-submit">
        <form onSubmit={this.handleSubmit} className="review-form">
          <div className="review-stars">
            <label>Stars:
                <input type="radio" name="rating" value={1}>1</input>
                <input type="radio" name="rating" value={2}>2</input>
                <input type="radio" name="rating" value={3} selected>3</input>
                <input type="radio" name="rating" value={4}>4</input>
                <input type="radio" name="rating" value={5}>5</input>
            </label>
          </div>
          <div className="review-body">
            <label>Review:
              <textarea name="body" refs="body" valueLink={this.linkState('body')}>

              </textarea>
            </label>
          </div>
          <div className="review-submit">
            <button disabled={!this.state.button}>Submit Review!</button>
          </div>
        </form>
      </div>
    );
  }
});
