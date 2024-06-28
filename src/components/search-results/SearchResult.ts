import { defineComponent, ref, watch } from "vue";
import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";

export default defineComponent({
    name: 'SearchResults',
    setup() {

        const { isLoadingPlaces, places, userLocation } = usePlacesStore();
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore();
        
        const activePlace = ref('');

        watch(places, (newPlaces) => {
            activePlace.value = '';
            setPlaceMarkers(newPlaces);
        });

        const onPlaceClicked = (place: Feature) => {
            activePlace.value = place.id;
            const [lng, lat] = place.center;
            map.value?.flyTo({
                center: [lng, lat],
                zoom: 14
            });
        };

        const getRouteDirections = (place: Feature) => {
            if (!userLocation.value) return;
            const [lng, lat] = place.center;
            const [startLng, startLat] = userLocation.value;
            const start: [number, number] = [startLng, startLat];
            const end: [number, number] = [lng, lat];
            getRouteBetweenPoints(start, end);
        };

        return {
            isLoadingPlaces,
            places,
            activePlace,
            onPlaceClicked,
            getRouteDirections
        };
    }
});
