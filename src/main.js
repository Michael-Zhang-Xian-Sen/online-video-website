import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index.js'    // vuex
import axios from 'axios'
import vueAxios from 'vue-axios'
import router from '@/router/router.js' // vue-router
import "@/assets/css/global.css"        // 全局css样式
import ElementUI from "element-ui"      // ElememntUI
import 'element-ui/lib/theme-chalk/index.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import brands from "@fortawesome/fontawesome-free-brands"       // 品牌图标
import solid from  "@fortawesome/fontawesome-free-solid"        // solid图标
import VueClipboard from 'vue-clipboard2'        // 复制到剪贴板


library.add(brands)
library.add(solid)

Vue.use(vueAxios, axios)
Vue.use(ElementUI)
Vue.use(VueClipboard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})