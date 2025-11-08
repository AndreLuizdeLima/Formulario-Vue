import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import VueTheMask from 'vue-the-mask'
app.use(VueTheMask)


app.mount('#app')
