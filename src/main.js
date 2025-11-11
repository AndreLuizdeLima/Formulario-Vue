import { createApp } from 'vue'
import App from './App.vue'
import moment from 'moment'

const app = createApp(App)

import VueTheMask from 'vue-the-mask'
app.use(VueTheMask) //plugin
app.config.globalProperties.$moment = moment  //lib externa 


app.mount('#app')
