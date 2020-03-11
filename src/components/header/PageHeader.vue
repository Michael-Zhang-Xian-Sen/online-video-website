<template>
	<div id="pageHeader" :class="[{'no-scroll':scrollTop == 0 && nowPath == '/home'}]">
		<ul class="nav-link">
			<li class="header-logo">
				<img src="@/assets/image/logoPE.png" />
				<span>我爱运动</span>
			</li>
			<li class="nav-link-item">
				<span>主页</span>
			</li>
		</ul>
		<ul class="nav-user">
			<li class="nav-link-item">
				<img class="user-head" src="@/assets/image/default_head.jpg" />
			</li>
			<li class="nav-link-item">
				<span @click="toLogin('user-login')">登陆</span>
			</li>
			<li class="nav-link-item">
				<span @click="toLogin('user-register')">注册</span>
			</li>
			<!-- 未开发该功能，故不予显示 -->
			<!-- <li class="nav-user">
				<el-button class="contribute" type="primary">投稿</el-button>
			</li>-->
		</ul>
	</div>
</template>

<script>
export default {
	name: "PageHeader",
	data() {
		return {
            scrollTop: 0,
            nowPath:"",
		};
    },
    created(){
        this.nowPath = this.$route.path;
    },
	mounted() {
		window.addEventListener("scroll", this.handleScroll, true);
	},
	methods: {
		fetchAllData() {
			// 获取后端数据
		},
		handleScroll() {
			this.scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;
		},
		toLogin(param) {
			this.$router.push("/login/" + param);
		}
	}
};
</script>

<style scoped>
#pageHeader {
	position: fixed;
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
	margin-left: 4px;
	font-size: 14px;
	color: #212121;
	font-weight: bold;
	transition: color 0.5s;
	-webkit-transition: 0.5s;
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
	color: #409eff;
}

/* 最顶端时的样式 */
.no-scroll ul li span {
	color: #ffffff;
	font-weight: bold;
}
</style>