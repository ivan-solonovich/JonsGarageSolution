import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import { plugin, defaultConfig } from '@formkit/vue'
import router from "./router/router.js";


const app = createApp(App)
app.use(
    router,
    plugin,
    defaultConfig,
    VueTailwindDatepicker
).mount('#app')