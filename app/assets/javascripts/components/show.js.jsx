var Show = React.createClass ({
  getInitialState: function () {
    return {bench: SingleBenchStore.currentBench()};
  },

  componentDidMount: function () {
    console.log("mounted");
    var benchId = parseInt(this.props.params.id);
    SingleBenchStore.addChangeListener(this.changed);
    ApiUtil.fetchBench(benchId);
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
        <h1>{this.state.bench.description}</h1>
        <div className="map" ref="map">

        </div>
      </div>
    );
  }
});
