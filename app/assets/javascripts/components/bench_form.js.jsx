var BenchForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {description: "", lat: "", lng: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"};
  },

  submitHandle: function (e) {
    ApiUtil.createBench(this.state);
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
              <button>Add Bench!</button>
            </div>
          </form>
        </div>
    );
  }
});
