/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/vue3'
import type { DefineComponent } from 'vue'
import { createSSRApp, h } from 'vue'
import '../css/app.css'

const appName = import.meta.env.VITE_APP_NAME || 'Portfolio'

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),

    resolve: (name) => {
        return resolvePageComponent(
            `../pages/${name}.vue`,
            import.meta.glob<DefineComponent>('../pages/**/*.vue')
        )
    },

    setup({ el, App, props, plugin }) {
        createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})
