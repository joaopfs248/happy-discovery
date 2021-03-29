const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create map
const mymap = L.map("mapid", options).setView([lat, lng], 13)

// create and add tileLayer
L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map Happy &copy;',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoiam9hb3BmcyIsImEiOiJja2c3N3E0dDcwNGx4MnFwYm4yZTBxb2V0In0.008lPHGKPZT_BtbqvE0ggg",
  }
).addTo(mymap)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

// create and add marker
const marker = L
.marker([lat, lng], { icon: icon })
.addTo(mymap)

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach((button) => {
    button.classList.remove("active")
  })

  // selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualiar o container de image
  imageContainer.src = image.src
  // adicionar a classe .active para este botão  
  button.classList.add("active")
}
