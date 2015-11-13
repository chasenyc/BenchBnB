var Map = React.createClass ({

  componentDidMount: function(){
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 40.724387, lng: -73.990282},
        zoom: 15
      };
      this.map = new google.maps.Map(map, mapOptions);
    },

  render: function () {

    return (
      <div className="map" ref="map">

      </div>
    );
  }
});
