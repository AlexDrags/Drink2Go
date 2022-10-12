const map = L.map('map').on('load', ()=>{console.log('Init map')}).setView({
  lat:59.96840,
  lng:30.3170209,
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mapPin = L.icon({
  iconUrl: '../../img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: true,
    icon: mapPin,
  },
).addTo(map);

marker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});



