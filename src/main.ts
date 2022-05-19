import { createApp } from 'vue'
import { createPinia } from "pinia";
import { router } from './router'
// import i18n from "./plugins/i18n";
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './styles/index.css'
import App from './App.vue'
import VueAxios from "vue-axios";
import axios from "./plugins/axios";
import auth from "./plugins/auth";

loadFonts()

createApp(App).use(createPinia()).use(auth).use(VueAxios, axios).use(vuetify).use(router).mount('#app')
