<template>
	<div
		id="pageHeader"
		:class="[{'no-scroll':scrollTop == 0 && nowPath == '/home'},{'fix-header':nowPath == '/home'}]"
	>
		<ul class="nav-link">
			<li class="nav-link-item header-logo" v-if="nowPath == '/home'">
				<div>
					<transition name="fade">
						<img src="@/assets/image/logo-pe-white.png" v-show="scrollTop == 0" />
					</transition>
					<transition name="fade">
						<img src="@/assets/image/logo-pe-blue.png" v-show="scrollTop != 0" />
					</transition>
				</div>
				<span>我爱运动</span>
			</li>
			<li class="nav-link-item header-logo" v-else>
				<div>
					<img src="@/assets/image/logo-pe-blue.png" />
				</div>
				<span>我爱运动</span>
			</li>
			<li class="nav-link-item">
				<span @click="routerPush('/home')">主页</span>
			</li>
		</ul>
		<ul class="nav-user">
			<li class="nav-link-item" @click="routerPush('/video_upload')">
				<img class="user-head" src="@/assets/image/video_upload.jpg" />
			</li>
			<li class="nav-link-item">
				<img class="user-head" src="@/assets/image/default_head.jpg" />
			</li>
			<li class="nav-link-item">
				<span @click="routerPush('/login/login')">登陆</span>
			</li>
			<li class="nav-link-item">
				<span @click="routerPush('/login/register_tel')">注册</span>
			</li>
			<li class="nav-user">
				<el-button class="contribute" type="primary" @click="routerPush('/video_upload')">投稿</el-button>
			</li>
		</ul>
	</div>
</template>

<script>
import { routerPush } from "@/utils/vue_router_util.js";

export default {
	name: "PageHeader",
	data() {
		return {
			scrollTop: 0
		};
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll, true);
	},
	methods: {
		fetchAllData() {
			// 获取后端数据
		},
		// 处理滚动条
		handleScroll() {
			this.scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;
		},
		// 跳转
		routerPush(path) {
			routerPush.call(this, path);
		}
	},
	computed: {
		nowPath() {
			return this.$route.path;
		}
	}
};
</script>

<style scoped>
#pageHeader {
	display: flex;
	justify-content: space-between;
	height: 56px;
	width: 100%;
	padding: 10px 24px;
	box-sizing: border-box;
	/* background-color: #3e78e5; */
	background-color: #ffffff;
	border-bottom: 1px solid #dedede;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
	transition: background-color 0.5s;
	-webkit-transition: background-color 0.5s;
}
.fix-header {
	position: fixed;
}
.no-scroll {
	background-color: rgba(0, 0, 0, 0) !important;
	border-bottom: 0px !important;
	box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
	transition: background-color 0.5s;
	-webkit-transition: background-color 0.5s;
}

/* nav左栏 链接操作 */
.nav-link {
	float: left;
	display: flex;
	align-items: center;
	list-style: none;
}
.header-logo {
	float: left;
	display: flex;
	align-items: center;
	padding-right: 14px;
}
.header-logo img {
	width: 32px;
	height: 32px;
}
.header-logo span {
	cursor: pointer;
	margin-left: 4px;
	font-size: 14px;
	color: #212121;
	font-weight: bold;
	transition: color 0.5s;
	-webkit-transition: 0.5s;
}
.header-logo div {
	position: relative;
	height: 32px;
	width: 32px;
}
.header-logo div img:nth-child(0) {
	position: static;
}
.header-logo div img:nth-child(1) {
	position: absolute;
}

/* nav右栏 用户相关操作 */
.nav-user {
	float: right;
	display: flex;
	align-items: center;
	list-style: none;
}
.nav-user li {
	float: left;
}
.contribute {
	transition: color 0.5s;
	-webkit-transition: 0.5s;
}
.user-head {
	height: 32px;
	width: 32px;
	border-radius: 45%;
	cursor: pointer;
	border: 1px solid #dedede;
}

/* PageHeader的全局li span样式 */
.nav-link-item {
	float: left;
	display: flex;
	align-items: center;
	padding-right: 14px;
}
.nav-link-item span {
	font-size: 14px;
	cursor: pointer;
	color: #212121;
	font-weight: bold;
	transition: color 0.5s;
	-webkit-transition: 0.5s;
}
.nav-link-item span:hover {
	color: #00a1d6;
}

/* 最顶端时的样式 */
.no-scroll ul li span {
	color: #ffffff;
	font-weight: bold;
}

/* vue单元素动画 */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>