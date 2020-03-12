<template>
	<div id="home">
		<div class="banner">
			<img src="@/assets/image/sports6.jpg" />
		</div>
		<div id="homeContent">
			<div id="menu">
				<el-row>
					<el-col :span="4">
						<el-row class="menu-button-left">
							<el-col :span="7" class="menu-button-left-item">
								<div class="menu-button-left-item-wrapper menu-button-home-wrapper">
									<font-awesome-icon icon="home" class="menu-button-home"></font-awesome-icon>
								</div>
								<span>首页</span>
							</el-col>
							<el-col :span="7" class="menu-button-left-item">
								<div class="menu-button-left-item-wrapper menu-button-home-wrapper">
									<font-awesome-icon icon="home" class="menu-button-home"></font-awesome-icon>
								</div>
								<span>首页</span>
							</el-col>
							<el-col :span="7" class="menu-button-left-item">
								<div class="menu-button-left-item-wrapper menu-button-home-wrapper">
									<font-awesome-icon icon="home" class="menu-button-home"></font-awesome-icon>
								</div>
								<span>首页</span>
							</el-col>
						</el-row>
					</el-col>
					<el-col :span="16">
						<el-row>
							<el-col :span="3">足球</el-col>
							<el-col :span="3">篮球</el-col>
							<el-col :span="3">网球</el-col>
							<el-col :span="3">羽毛球</el-col>
							<el-col :span="3">乒乓球</el-col>
							<el-col :span="3">象棋</el-col>
							<el-col :span="3">围棋</el-col>
							<el-col :span="3">游泳</el-col>
						</el-row>
					</el-col>
					<el-col :span="4">这是一些其他的栏目</el-col>
				</el-row>
			</div>
			<div id="popular">
				<el-row class="popular-title-wrapper">
					<el-col :span="4">
						<el-row class="popular-title">
							<el-col :span="1">&nbsp;</el-col>
							<el-col :span="7" class="popular-icon-wrapper">
								<font-awesome-icon :icon="['fab','hotjar']" class="popular-icon"></font-awesome-icon>
							</el-col>
							<el-col class="popular-title-text" :span="16">
								<span>热门内容</span>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<div class="video-item">
							<img src="@/assets/image/basketball.jpg"  @click="routerPush('/video/video-id')"/>
							<div class="video-info">
								<span class="video-title" @click="routerPush('/video/video-id')">三十天精通篮球</span>
								<span class="video-publisher">作者：蔡徐坤</span>
							</div>
						</div>
					</el-col>
					<el-col :span="4"></el-col>
					<el-col :span="4"></el-col>
					<el-col :span="4"></el-col>
					<el-col :span="4"></el-col>
					<el-col :span="4"></el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
import { routerPush } from "@/utils/vue_router_util.js";

export default {
	name: "Home",
	methods: {
		routerPush(path){
			routerPush.call(this,path)
		}
	}
};
</script>

<style scoped>
/* 横幅 */
.banner {
	width: 100%;
}
.banner img {
	width: 100%;
}
/* 主页内容 */
#homeContent {
	width: 80%;
	margin: 0 10%;
	max-width: 1400px;
}
/* 1.菜单栏 */
#menu {
	padding: 20px 0;
	width: 100%;
	box-sizing: border-box;
	border-bottom: 1px solid #e7e7e7;
}
/* 菜单栏按钮-左栏 */
.menu-button-left {
	display: flex;
	justify-content: center;
}
.menu-button-left-item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.menu-button-left-item-wrapper {
	height: 39px;
	width: 39px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.menu-button-left-item span {
	margin-top: 4px;
	font-size: 14px;
}
/* 菜单栏按钮-左栏-主页按钮 */
.menu-button-home-wrapper {
	background-color: #f45b7b;
}
.menu-button-home {
	font-size: 24px;
	color: #ffffff;
}
/* 菜单栏按钮-中间栏 */
.menu-channel {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

/* 2.热门内容 */
#popular{
	margin: 15px 0 30px 0 ;
}
.popular-title-wrapper {
	margin: 10px 0;
}
.popular-title {
	display: flex;
	align-items: center;
}
.popular-icon-wrapper {
	display: flex;
	justify-content: center;
}
.popular-icon {
	font-size: 36px;
}
.popular-title-text {
	font-size: 30px;
}
/* 热门内容中的一个视频条目 */

.video-item{
	width: 90%;
	padding: 0 5%;
	display: flex;
	flex-direction: column;
}
.video-item img {
	color: #212121;
	width: 100%;
	cursor: pointer;
}
.video-title {
	display: block;
	color: #212121;
	margin: 10px 0 5px 0;
	font-size: 14px;
	font-weight: 500;
	cursor: pointer;
}
.video-publisher {
	display: block;
	font-size: 12px;
	color: #999;
	cursor: pointer;
}
</style>