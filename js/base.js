
$( document ).ready(function() {
    var mymap = L.map('mapid').setView([40.505, 153], 2);
    let planelength = 100000;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    var markers = L.markerClusterGroup();
    for(var i=0;i<planelength;i++){
        var title = "marker"+i
        var marker = L.marker(new L.LatLng(getRandomArbitrary(1,200), getRandomArbitrary(10,170)), { title:title  });
            marker.bindPopup(title);
            markers.addLayer(marker);
    }
    mymap.addLayer(markers);
});

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * ((max - min) + min)*100)/100;
}
