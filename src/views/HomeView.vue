<template>
  <div>
    <MapView />
    <SearchBar />
    <MyLocationBtn />
    <TripDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables';

import MapView from '@/components/mapview/MapView.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';
import TripDetails from '@/components/trip-details/TripDetails.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MapView,
    SearchBar,
    MyLocationBtn,
    TripDetails
  },
  setup() {
    const placesStore = usePlacesStore();

    return {
      placesStore
    };
  }
});
</script>

<style scoped>
/* Puedes agregar estilos específicos para HomeView aquí si lo necesitas */
</style>
