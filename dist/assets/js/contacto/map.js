
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFsY2F6YXJodW0xIiwiYSI6ImNraGQyMXI2aTBlc3QycW1kYWhvYWgxc3QifQ.6ILivHfgoiqLNS_r19-obA';  
var map = new mapboxgl.Map({ 
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v11',  
       center: [-99.1602889, 19.3767594],   
    zoom: 13
}); 

var marker = new mapboxgl.Marker()
.setLngLat([-99.1602889, 19.3767594])
.addTo(map);
