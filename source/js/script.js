const sliderElement = document.querySelector('.uislider');
const valueElement = document.querySelector('.price-form__value');

valueElement.value = 0;

noUiSlider.create(sliderElement, {
  start: [0, 900],
    connect: true,
    range: {
        'min': 0,
        'max': 1100,
    }
});




const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const map = L.map('map').on('load', ()=>{console.log('Init map')}).setView({
  lat:59.96819,
  lng:30.31754,
}, 19);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mapPin = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const nameTitle = {
  title: 'Санкт-Петербург, набережная реки Карповки, дом 5',
}

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: false,
    icon: mapPin,
  },
).addTo(map).bindPopup(nameTitle.title);

marker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});


const mainNav = document.querySelector('.main-nav__list');
const menuButton = document.querySelector('.button-js');
const buttonOpen = document.querySelector('.menu-js');
const buttonClose = document.querySelector('.close-js');


if (mainNav.classList.contains('main-nav__list-nojs--open')) {
  mainNav.classList.remove('main-nav__list-nojs--open');
  buttonClose.classList.add('button-menu__icon--close');
}



function onClickHandler(evt) {
  evt.preventDefault();
  buttonOpen.classList.toggle('button-menu__icon--close');
  buttonClose.classList.toggle('button-menu__icon--close');
  mainNav.classList.toggle('main-nav__list--open-js');
}

menuButton.addEventListener('click', onClickHandler);


