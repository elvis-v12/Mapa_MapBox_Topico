<template>
    <div v-if="distance && duration" class="trip-container column">
        <div class="col">Distancia: <strong>{{ distance }} kms</strong></div>
        <div class="col">Duración: <strong>{{ duration }} minutos</strong></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMapStore } from '@/composables';
import { toRefs } from 'vue';

export default defineComponent({
    name: 'TripDetails',
    setup() {
        const { distance, duration } = toRefs(useMapStore());

        return {
            distance,
            duration
        };
    }
});
</script>

<style scoped>
.trip-container { 
    background-color: white;
    border-radius: 10px;
    bottom: 10px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 25px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    position: fixed;
    width: 350px;
    z-index: 100;  
}

strong {
    color: #42b983;
}
</style>
