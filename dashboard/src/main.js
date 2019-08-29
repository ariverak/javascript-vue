import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' 
import Axios from 'axios'

Vue.prototype.$axios = Axios;

new Vue({
  render: h => h(App),
  vuetify
}).$mount('#app')
