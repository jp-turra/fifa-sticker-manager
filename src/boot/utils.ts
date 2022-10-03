import { mapStores } from "pinia";
import { boot } from "quasar/wrappers";
import { useAppStore } from "src/stores/store";

const appStore = { ...mapStores(useAppStore) }["appStore"]();
/**
 * Here we add the store interface to the global Vue object
 */
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties extends UtilsInterface {
        
    }
}

export default boot(({app}) => {
    app.mixin({
        computed: {
            store() {
                return { ...mapStores(useAppStore) }["appStore"]
            }
        }
    })
})

export interface UtilsInterface {
    store: typeof appStore;
}