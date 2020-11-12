

var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-99.1602889, 19.3767594]
      },
      properties: {
        title: 'Mapbox',
        description: 'SISSA Monitoring Integral'
      }
    }]
  };




mapboxgl.accessToken = 'pk.eyJ1IjoiYmFsY2F6YXJodW0xIiwiYSI6ImNraGQyMXI2aTBlc3QycW1kYWhvYWgxc3QifQ.6ILivHfgoiqLNS_r19-obA';  
var map = new mapboxgl.Map({ 
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v11',  
       center: [-99.1602889, 19.3767594],   
    zoom: 13
}); 



  // add markers to map
  geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });




// var marker = new mapboxgl.Marker()
// .setLngLat([-99.1602889, 19.3767594])
// .addTo(map);
