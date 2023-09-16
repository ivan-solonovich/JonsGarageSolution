import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "../components/MainPage.vue";

const routes =
    [

        {
            path: '/',
            name: 'home',
            component: MainPage,
        },
    ]



const router = createRouter({

    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }

    }
})


export default router