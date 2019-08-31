import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' 
import Axios from 'axios'
import VueRouter from "vue-router";
import routes from './routes'

Vue.prototype.$axios = Axios;

const router = new VueRouter({
  routes, 
  mode: 'history',
  linkExactActiveClass: "nav-item active"
});

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
