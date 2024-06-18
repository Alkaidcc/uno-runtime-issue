import initUnocssRuntime from '@unocss/runtime'
import presetIcons from '@unocss/preset-icons/browser'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
initUnocssRuntime({
  defaults: {
    presets: [
      presetIcons({
        collections: {
          carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
          lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
        },
      }),
    ],
  },
})
createApp(App).mount('#app')
