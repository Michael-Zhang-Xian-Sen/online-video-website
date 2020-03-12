import router from '@/router/router.js' // vue-router

// 跳转路由
export function routerPush(path) {
    // console.log(this);
    console.log(path);
    console.log(this.$route.path);
    this.$route.path != path ? router.push(path) : location.reload();
}