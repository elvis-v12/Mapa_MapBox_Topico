import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';
import { directionsApi } from '@/apis';
import { DirectionsResponse } from '@/interfaces/directions';

export type LngLat = [number, number];

const actions: ActionTree<MapState, StateInterface> = {
    async getRouteBetweenPoints({ commit }, { start, end }: { start: LngLat, end: LngLat }) {
        try {
            const resp = await directionsApi.get<DirectionsResponse>(`${start.join(',')};${end.join(',')}`);

            const { distance, duration, geometry } = resp.data.routes[0];

            commit('setDistanceDuration', {
                distance,
                duration,
            });

            commit('setRoutePolyline', geometry.coordinates);
        } catch (error) {
            console.error('Error fetching directions:', error);
        }
    }
};

export default actions;
