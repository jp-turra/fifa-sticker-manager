import { mapStores } from "pinia";
import { boot } from "quasar/wrappers";
import { useAppStore } from "src/stores/store";
import {version} from "../../package.json"

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
                return useAppStore()
            },
            app_version() {
                console.log("v ", version)
                return version
            }
        }
    })
})

export interface UtilsInterface {
    store: typeof appStore;
    app_version: string
}