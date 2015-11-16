var ReviewForm = React.createClass({



  handleSubmit: function (e) {
    e.preventDefault();
    var rating = e.target.rating.value;
    var body = e.target.body.value
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
              <textarea name="body">

              </textarea>
            </label>
          </div>
          <div className="review-submit">
            <button>Submit Review!</button>
          </div>
        </form>
      </div>
    );
  }
});
