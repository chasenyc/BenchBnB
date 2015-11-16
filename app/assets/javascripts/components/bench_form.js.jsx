var BenchForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    return {description: "", lat: "", lng: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png", seating: 0};
  },

  submitHandle: function (e) {
    ApiUtil.createBench(this.state);
    this.history.pushState(null, '/'); // needs to wait for a success
  },

  componentDidMount: function () {
    this.setState({
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng
    })
  },

  render: function () {

    return (
        <div>
          <form onSubmit={this.submitHandle} className="new-bench-form">
            <div>
              <label>Description:
                <input type="text" valueLink={this.linkState('description')} />
              </label>
            </div>
            <div>
              <label>Latitude:
                <input type="text" valueLink={this.linkState('lat')} />
              </label>
            </div>
            <div>
              <label>Longitude:
                <input type="text" valueLink={this.linkState('lng')} />
              </label>
            </div>
            <div>
              <label>Seating:
                <select type="text" valueLink={this.linkState('seating')}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </label>
            </div>
            <div>
              <button>Add Bench!</button>
            </div>
          </form>
        </div>
    );
  }
});
