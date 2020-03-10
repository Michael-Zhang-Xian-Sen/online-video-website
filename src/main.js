import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index.js'    // vuex
import axios from 'axios'          
import vueAxios from 'vue-axios'
import router from '@/router/router.js' // vue-router
import ElementUI from "element-ui";     // ElememntUI
import 'element-ui/lib/theme-chalk/index.css' 

Vue.use(vueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App),
})