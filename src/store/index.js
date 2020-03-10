// 引用vuex，存储所有的state，加载与vuex相关的模块。
import Vue from 'vue'
import Vuex from "vuex"
import VueAxios from 'vue-axios'
import mutations from "@/store/mutations.js"
import getters from "@/store/getters.js"
import actions from "@/store/getters.js"
import 'es6-promise/auto' // vuex依赖promise 该插件为promise的polyfill

Vue.use(Vuex,VueAxios)

const state = {
    
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
})