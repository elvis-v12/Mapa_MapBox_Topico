import { computed, defineComponent, ref } from "vue";
import { usePlacesStore } from "@/composables";
import SearchResult from "@/components/search-results/SearchResult.vue";

export default defineComponent({
    name: 'SearchBar',
    components: { SearchResult },
    setup() {
        const debounceTimeout = ref<number | undefined>(undefined);
        const debouncedValue = ref('');

        const { searchPlacesByTerm } = usePlacesStore();

        const searchTerm = computed({
            get() {
                return debouncedValue.value;
            },
            set(val: string) {
                if (debounceTimeout.value) clearTimeout(debounceTimeout.value);

                debounceTimeout.value = window.setTimeout(() => {
                    debouncedValue.value = val;
                    searchPlacesByTerm(val);
                }, 500); // 500 ms debounce
            }
        });

        return {
            debouncedValue,
            searchTerm
        };
    }
});
