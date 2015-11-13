var Map = React.createClass ({
  getInitialState: function () {
    return {markers: BenchStore.all()};
  },

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 40.724387, lng: -73.990282},
      zoom: 15
    };
    this.map = new google.maps.Map(map, mapOptions);
    BenchStore.addChangeListener(this._change);
  },

  _change: function (){
    this.setState({markers: BenchStore.all()});
    this.placeMarkers();
  },

  placeMarkers: function () {
    this.state.markers.forEach(function (mark) {
      var myLatlng = new google.maps.LatLng(mark.lat, mark.lng);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: this.map,
        title: mark.description
      });
    }.bind(this));
  },

  render: function () {

    return (
      <div className="map" ref="map">

      </div>
    );
  }
});
