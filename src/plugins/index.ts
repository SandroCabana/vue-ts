import type { App } from 'vue'
import vuetify from './vuetify'
import router from '@/router'
import { createPinia } from 'pinia'

export function registerPlugins(app: App): void {
  app
    .use(createPinia())
    .use(vuetify)
    .use(router)
}

