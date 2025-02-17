import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import RekaResolver from "reka-ui/resolver"
import tailwindcss from "@tailwindcss/vite"
import vueDevTools from "vite-plugin-vue-devtools"





const config = defineConfig({
    server: {
        port: 8080
    },
    plugins: [
        vue(),
        Components({
            dts: true,
            resolvers: [
                RekaResolver()
            ]
        }),
        tailwindcss(),
        vueDevTools()
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
})





export default config