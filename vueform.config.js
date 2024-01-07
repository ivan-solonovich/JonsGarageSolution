// vueform.config.(js|ts)

import en from '@vueform/vueform/locales/en'
import tailwind from '@vueform/vueform/themes/tailwind'
import { defineConfig } from '@vueform/vueform'
import builder from '@vueform/builder/plugin'

export default defineConfig({
    theme: tailwind,
    locales: { en },
    locale: 'en',
    apiKey: 'u7z6-8wku-5svz-vd9p-g9uy',
    plugins: [
        builder,
    ],
})