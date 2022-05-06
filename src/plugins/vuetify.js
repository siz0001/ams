// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { VBtn, VTextField } from 'vuetify/components'

export default createVuetify({
  components: {
    VBtn
  },
  defaults: {
    global: {
      ripple: true
    }
  },
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme: {
        colors: {
          background: '#F9FAFB',
          primary: '#1b53a0'
        }
      }
    }
  }
})
