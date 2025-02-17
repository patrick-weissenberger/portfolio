import { defineStore } from "pinia"
import { useColorMode } from "@vueuse/core"





const useStoreSettings = defineStore("useStoreSettings", () => {

    // Theme
    const theme = useColorMode()

})





export default useStoreSettings