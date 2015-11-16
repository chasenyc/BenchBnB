var Search = React.createClass ({
  getInitialState: function () {
    return {min: 0, max: 5, bounds: {}};
  },

  componentDidMount: function () {
    FilterStore.addChangeListener(this._changed);
    FilterActions.changeMinMax({min: this.state.min, max: this.state.max});
  },

  componendWillUnmount: function () {
    FilterStore.removeChangeListener(this._changed);
  },

  _changed: function (filterParams) {
    this.setState(FilterStore.all());    ApiUtil.fetchBenches(this.state.bounds);
  },

  mapClickHandler: function (e) {
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    this.props.history.pushState(null, '/new', {lat: lat, lng: lng});
  },

  render: function () {

    return (
      <div>
        <Map
          clickHandler={this.mapClickHandler}
          min={this.state.min}
          max={this.state.max}
          bounds={this.state.bounds}
        />
        <Index />
      </div>
    );
  }
});
