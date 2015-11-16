var Map = React.createClass ({
  _mapMarkers: [],
  _marks: [],

  getInitialState: function () {
    return {
      markers: BenchStore.all(),
      currentBench: BenchStore.currMouseOver()
    };
  },

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 40.724387, lng: -73.990282},
      zoom: 15
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.map.addListener('idle', this.mapChanged);
    this.map.addListener('click', this.props.clickHandler);
    BenchStore.addChangeListener(this._change);
    FilterStore.addChangeListener(this._change);
    BenchStore.addHighlightChangeListener(this._highlightChange);

  },

  mapChanged: function () {
    this.clearMarkers();
    FilterActions.changeBounds(this.getBounds());
  },

  getBounds: function () {
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
    return totalBounds;
  },

  _change: function (){
    this.setState({
      markers: BenchStore.all(),
      currentBench: BenchStore.currMouseOver()
    });
    this.clearMarkers();
    this.placeMarkers();
  },

  _highlightChange: function () {
    this.setState({
      markers: BenchStore.all(),
      currentBench: BenchStore.currMouseOver()
    });
    this.animateMarker();
  },

  animateMarker: function () {
    this._mapMarkers.forEach(function (mark, idx) {
      if (this.state.currentBench != parseInt(mark.getLabel())) {
        mark.setAnimation(null);
      } else {
        mark.setAnimation(google.maps.Animation.BOUNCE);
      }
    }.bind(this));
  },

  placeMarkers: function () {

    this.state.markers.forEach(function (mark) {
      if (!this._marks[mark.id]) {
        var markId = mark.id;
        var myLatlng = new google.maps.LatLng(mark.lat, mark.lng);
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: this.map,
          title: mark.description,
          label: markId + ''
        });
        this.attachSecretMessage(marker, mark.description);
        this._mapMarkers.push(marker);
        this._marks[mark.id] = true;
      }
    }.bind(this));
    this.checkIfMarkersInBounds();
  },

  checkIfMarkersInBounds: function () {
    // console.log(this._mapMarkers.length);
    this._mapMarkers.forEach(function (marker) {
      if (this.map.getBounds().contains(marker.getPosition())) {
        if (!marker.map) {
          marker.setMap(this.map);
        }
      }
    }.bind(this));
  },

  clearMarkers: function () {
    this._mapMarkers.forEach(function(marker, idx) {
      if (!this.map.getBounds().contains(marker.getPosition())) {
        marker.setMap(null);
        this._marks[parseInt(marker.label)] = false;
        this._mapMarkers.splice(idx, 1);
      } else {
        var exists = false;
        BenchStore.all().forEach(function (mark) {
          if (mark.id === parseInt(marker.label)){
            exists = true;
          }
        });
        if (!exists) {
          marker.setMap(null);
          this._marks[parseInt(marker.label)] = false;
          this._mapMarkers.splice(idx, 1);

        }
      }
    }.bind(this));
    // console.log(this._mapMarkers);
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
