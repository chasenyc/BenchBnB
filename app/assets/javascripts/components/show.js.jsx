var Show = React.createClass ({
  getInitialState: function () {
    return {bench: SingleBenchStore.currentBench()};
  },

  componentDidMount: function () {
    console.log("didreceive");
    var benchId = parseInt(this.props.params.id);
    SingleBenchStore.addChangeListener(this.changed);
    ApiUtil.fetchBench(benchId);
  },

  componentWillReceiveProps: function (newProps) {
    console.log("willreceive");
    ApiUtil.fetchBench(newProps.params.id);
  },

  changed: function () {
    this.setState({bench: SingleBenchStore.currentBench()});
    this.renderMap();
  },

  renderMap: function () {
    var currentBench = this.state.bench;
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: currentBench.lat, lng:currentBench.lng},
      draggable: false,
      zoom: 15,
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.placeMarker(currentBench);
  },

  placeMarker: function (bench) {
    var markId = bench.id;
    var myLatlng = new google.maps.LatLng(bench.lat, bench.lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: this.map,
      title: bench.description,
      label: markId + ''
    });
  },

  render: function () {

    return (
      <div className="show-bench">
        <div className="show-details">
          <h1>{this.state.bench.description}</h1>
          <h2>Fits {this.state.bench.seating} people.</h2>
          <img className="bench-image" src={this.state.bench.image_url}></img>
        </div>
        <div className="map" ref="map">

        </div>
        {this.props.children}
        <ReviewIndex benchId={this.state.bench.id}/>
      </div>
    );
  }
});
