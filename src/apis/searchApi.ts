import axios from "axios";

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    lenguage: 'es',
    access_token: 'pk.eyJ1IjoianVsaW8xMjQ0IiwiYSI6ImNseHh4NzFwaTJud3EybXB4bWlreWQ3cmMifQ.7ulDU-q5ZprSAom5PHr8qQ',
  },
});

export default searchApi;
