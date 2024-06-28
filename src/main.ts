import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoieWVoaW5uZXJqcyIsImEiOiJjbHhsOW02OHAwODI4MnFwdDEzdjdtanp4In0.x27uebdQwm1EFLCvPuIKlQ';

if ( !navigator.geolocation ) {
    alert('Tu navegador no soporta el Geolocation');
    throw new Error('Tu navegador no soporta el Geolocation');
}



createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
