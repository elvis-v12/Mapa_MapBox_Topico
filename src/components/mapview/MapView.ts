import { defineComponent, onMounted, ref, watch } from "vue";
import Mapboxgl from "mapbox-gl";

import { usePlacesStore, useMapStore } from "@/composables";




export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserlocationReady } = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async () => {
            if ( !mapElement.value ) throw new Error('Div Elemento no existe');
            if ( !userLocation.value ) throw new Error('user location no existe');

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: userLocation.value,
                zoom: 15
            });

            const myLocationPopup = new Mapboxgl.Popup({ offset: [ 0,-25 ] })
                .setLngLat( userLocation.value )
                .setHTML(`
                    <h4>La ambulancias Esta Aqui</h4>
                    <p>Seguimiento</p>
                `);

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .setPopup( myLocationPopup )
                .addTo( map );

            // Todo: establecer el mapa en Vuex
            setMap( map );
        }

        onMounted(() => {
            if ( isUserlocationReady.value ) 
                return initMap();
        });

        watch( isUserlocationReady, ( newVal ) => {
            if ( isUserlocationReady.value ) initMap();
        })

        return {
            isUserlocationReady,
            mapElement
        };
    }
});