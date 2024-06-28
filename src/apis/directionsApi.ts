import axios from "axios";

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1IjoieWVoaW5uZXJqcyIsImEiOiJjbHhsOW02OHAwODI4MnFwdDEzdjdtanp4In0.x27uebdQwm1EFLCvPuIKlQ',
  },
});

export default directionsApi;
