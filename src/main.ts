import { createApp } from 'vue'
import { router } from './router'
// import i18n from "./plugins/i18n";
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './styles/index.css'
import App from './App.vue'

loadFonts()

createApp(App).use(vuetify).use(router).mount('#app')
