var Map = React.createClass ({
  _mapMarkers: [],

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
    this.map.addListener('idle', function() {
      this.clearMarkers();
      var bounds = this.map.getBounds();
      var totalBounds = {
        northEast: {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng()
        },
        southWest: {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng()
        },
      };
      ApiUtil.fetchBenches(totalBounds);
    }.bind(this));
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
      this.attachSecretMessage(marker, mark.description);
      this._mapMarkers.push(marker);
    }.bind(this));

  },

  clearMarkers: function () {
    this._mapMarkers.forEach(function(marker) {
      marker.setMap(null);
    });
  },

  attachSecretMessage: function (marker, secretMessage){
    var infowindow = new google.maps.InfoWindow({
      content: secretMessage
    });

    marker.addListener('click', function() {
      infowindow.open(marker.get('map'), marker);
    });
  },

  render: function () {

    return (
      <div className="map" ref="map">

      </div>
    );
  }
});
