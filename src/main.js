import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index.js'    // vuex
import axios from 'axios'
import vueAxios from 'vue-axios'
import router from '@/router/router.js' // vue-router
import "@/assets/css/global.css"        // 全局css样式
import ElementUI from "element-ui"      // ElememntUI
import 'element-ui/lib/theme-chalk/index.css'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import brands from "@fortawesome/fontawesome-free-brands" // fontawesome的品牌图标
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faQq } from "@fortawesome/fontawesome-free-brands"

library.add(brands)
library.add(fab)
library.add(faQq)

Vue.use(vueAxios, axios)
Vue.use(ElementUI)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})