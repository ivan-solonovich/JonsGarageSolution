import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "../components/MainPage.vue";
import AboutPage from "../components/AboutPage.vue";
import ContactPage from "../components/ContactPage.vue";

const routes =
    [

        {
            path: '/',
            name: 'home',
            component: MainPage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage,
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