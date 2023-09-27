import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "../components/MainPage.vue";
import AboutPage from "../components/AboutPage.vue";
import ContactPage from "../components/ContactPage.vue";
import BrokenSprings from "../components/door-issuses/BrokenSprings.vue";
import OffTrack from "../components/door-issuses/OffTrack.vue";
import BrokenMotor from "../components/door-issuses/BrokenMotor.vue";
import CableSnappedOff from "../components/door-issuses/CableSnappedOff.vue";
import RollerReplacement from "../components/door-issuses/RollerReplacement.vue";
import BandedGarageDoorPanels from "../components/door-issuses/BandedGarageDoorPanels.vue";
import RemoteControlsAndKeyPads from "../components/door-issuses/RemoteControlsAndKeyPads.vue";

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
        {
            path: '/broken-springs',
            name: 'broken-springs',
            component: BrokenSprings,
        },
        {
            path: '/off-track',
            name: 'off-track',
            component:OffTrack,
        },
        {
            path: '/broken-motor',
            name: 'broken-motor',
            component:BrokenMotor,
        },
        {
            path: '/cable-snapped-off',
            name: 'cable-snapped-off',
            component:CableSnappedOff,
        },
        {
            path: '/roller-replacement',
            name: 'roller-replacement',
            component:RollerReplacement,
        },
        {
            path: '/banded-garage-door-panels',
            name: 'banded-garage-door-panels',
            component:BandedGarageDoorPanels,
        },
        {
            path: '/remote-controls-and-key-pads',
            name: 'remote-controls-and-key-pads',
            component:RemoteControlsAndKeyPads,
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