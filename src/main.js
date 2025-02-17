import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// jQuery
window.$ = window.jQuery = require('jquery');

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

// Perfect Scrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'



let app = createApp(App)

// Global URL
app.config.globalProperties.serverURL = 'http://127.0.0.1:8000/'

app.use(router).use(vuetify).use(PerfectScrollbar).mount('#app')
