// create map
const mymap = L.map("mapid").setView([-22.91361, -43.1844011], 13);

// create and add tileLayer
L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution: "Map Happy &copy;",
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoiam9hb3BmcyIsImEiOiJja2c3N3E0dDcwNGx4MnFwYm4yZTBxb2V0In0.008lPHGKPZT_BtbqvE0ggg",
  }
).addTo(mymap);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// dynamic arguments received
function addMarker({id, name, lat, lng}) {

  // create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg" ></a>`
  );

  // create and add marker
  const marker = L.marker([lat, lng], { icon: icon })
    .addTo(mymap)
    .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( orphanageElement => {
  const orphanage = {
    name: orphanageElement.dataset.name,
    id: orphanageElement.dataset.id,
    lat: orphanageElement.dataset.lat,
    lng: orphanageElement.dataset.lng
  }
  
  addMarker(orphanage)
})
