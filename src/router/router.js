import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/page/home/Home.vue"
import Login from "@/page/login/Login.vue"
import RegisterTel from "@/page/login/RegisterTel.vue"
import RegisterMail from "@/page/login/RegisterMail.vue"
import Video from "@/page/video/Video.vue"
import VideoList from "@/page/sports/VideoList.vue"
import VideoUpload from "@/page/video_upload/VideoUpload.vue"

Vue.use(VueRouter)

const DEFAULT_PAGE = {
    path: "/",
    redirect: "/home"
}

const HOME = {
    path: "/home",
    component: Home
}

const LOGIN = {
    path: "/login/login",
    component: Login
}

const REGISTERTEL = {
    path: "/login/register_tel",
    component: RegisterTel
}

const REGISTERMAIL = {
    path: "/login/register_mail",
    component: RegisterMail
}

const VIDEO = {
    path: "/video/:param",
    component: Video
}

const VIDEO_LIST = {
    path:"/video_list",
    component:VideoList
}

const VIDEO_UPLOAD = {
    path: "/video_upload",
    component: VideoUpload
}

const routes = [
    DEFAULT_PAGE,   // 默认页面
    HOME,           // 主页
    LOGIN,          // 登陆/注册页面
    REGISTERTEL,
    REGISTERMAIL,
    VIDEO,          // 视频详情页面
    VIDEO_LIST,     // 视频列表页面，比如足球视频、排球视频等。
    VIDEO_UPLOAD,   // 上传视频

]

const router = new VueRouter({
    routes,
    mode: 'history',
})


export default router