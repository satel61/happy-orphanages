// tipos de dados
// String ""
// Number 01
// Object {}
// Boolean true or false
// Array[]

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-16.6739918,-49.2603574], 15);


//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl:  "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})




// create and add marker
L
.marker([-16.6739918,-49.2603574], { icon })
.addTo(map)


// image gallery


function selectImage(event) {
   const button = event.currentTarget

   //remover todas as classes .active
   const buttons = document.querySelectorAll(".images button")
   //console.log(buttons)
   buttons.forEach(removeActiveClass) /*para cada botao (button) => {executa o que tem aqui /dentro} forma mais pequena */

   function removeActiveClass(button){
        button.classList.remove("active")
   }

   //selecionar a image clicada
   const image = button.children[0]
   const imageContainer = document.querySelector(".orphanage-details > img")

   // atualizar o container de image
   imageContainer.src = image.src

   //adicionar a classe .active para este botao
   button.classList.add('active')




}

