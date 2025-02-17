import { createRouter, createWebHistory } from "vue-router"





const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "index",
            component: () => import("@/views/Index.vue")
        },
        {
            path: "/components",
            name: "components_index",
            component: () => import("@/views/components/Index.vue")
        }
    ]
})





export default router