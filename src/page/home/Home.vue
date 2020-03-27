<template>
	<div id="home">
		<div class="banner">
			<img src="@/assets/image/sports6.jpg" />
		</div>
		<div id="homeContent">
			<div id="menu">
				<el-row class="column-wrapper">
					<el-col :span="4">
						<el-row class="menu-left">
							<el-col :span="8" class="menu-left-left-column">
								<div class="ml-item-wrapper">
									<div class="menu-left-item home-wrapper">
										<font-awesome-icon icon="home" class="menu-home"></font-awesome-icon>
									</div>
									<span>首页</span>
								</div>
							</el-col>
							<el-col :span="8" class="menu-left-middle-column">
								<div class="ml-item-wrapper">
									<div class="menu-left-item comment-dots-wrapper">
										<font-awesome-icon icon="comment-dots" class="menu-comment-dots"></font-awesome-icon>
									</div>
									<span>动态</span>
								</div>
							</el-col>
							<el-col :span="8" class="menu-left-item-wrapper menu-left-right-column">
								<div class="ml-item-wrapper">
									<div class="menu-left-item trophy-wrapper">
										<font-awesome-icon icon="trophy" class="menu-trophy"></font-awesome-icon>
									</div>
									<span>排行榜</span>
								</div>
							</el-col>
						</el-row>
					</el-col>
					<span class="break-column"></span>
					<!-- 栏目信息 -->
					<el-col class="program-wrapper" :span="20">
						<div class="program-list" v-for="row in program" :key="row.id">
							<el-row>
								<el-col class="program-item" :span="3" v-for="item in row" :key="item.id">
									<div>
										<span>{{item.text}}</span>
										<span effect="dark" class="program-tag" type="danger">999+</span>
									</div>
								</el-col>
							</el-row>
						</div>
					</el-col>
				</el-row>
			</div>
			<!-- 热门内容 下一行-->
			<ProgramRow title="热点">
				<template v-slot:icon>
					<font-awesome-icon :icon="['fab','hotjar']" class="pr-icon"></font-awesome-icon>
				</template>
			</ProgramRow>
			<!-- 下面的内容是近期的热点赛事，比如NBA -->
			<ProgramRow title="NBA赛事">
				<template v-slot:icon>
					<font-awesome-icon icon="basketball-ball" class="basketball-icon"></font-awesome-icon>
				</template>
			</ProgramRow>
		</div>
	</div>
</template>

<script>
import { routerPush } from "@/utils/vue_router_util.js";
import ProgramRow from "@/components/home/ProgramRow.vue";

export default {
	name: "Home",
	methods: {
		routerPush(path) {
			routerPush.call(this, path);
		}
	},
	components: {
		ProgramRow
	},
	data() {
		return {
			program: [
				[
					{
						text: "足球"
					},
					{
						text: "篮球"
					},
					{
						text: "网球"
					},
					{
						text: "羽毛球"
					},
					{
						text: "乒乓球"
					},
					{
						text: "象棋"
					},
					{
						text: "围棋"
					},
					{
						text: "军棋"
					}
				],
				[
					{
						text: "游泳"
					},
					{
						text: "拳击"
					},
					{
						text: "体操"
					},
					{
						text: "田径"
					},
					{
						text: "赛马"
					},
					{
						text: "射击"
					},
					{
						text: "射箭"
					},
					{
						text: "速滑"
					}
				]
			]
		};
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
	box-sizing: border-box;
	border-bottom: 1px solid #e7e7e7;
}
.column-wrapper {
	display: flex;
	position: relative;
	align-items: center;
	height: 100%;
	width: 100%;
}
/* 菜单栏按钮-左栏 */
.menu-left {
	display: flex;
	padding-left: 20px;
	justify-content: space-between;
}
.ml-item-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.ml-item-wrapper span {
	margin-top: 4px;
	font-size: 14px;
}
.ml-item-wrapper:hover {
	color: #00a1d6;
	cursor: pointer;
	transition: color 0.5s;
}
.menu-left-item {
	height: 39px;
	width: 39px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}
/* 菜单栏左栏 */
.menu-left-left-column {
	display: flex;
	justify-content: flex-start;
}
.home-wrapper {
	background-color: #f45b7b;
}
.menu-home {
	font-size: 24px;
	color: #ffffff;
}
.menu-left-middle-column {
	display: flex;
	justify-content: center;
}
.comment-dots-wrapper {
	background-color: #41a1d7;
}
.menu-comment-dots {
	font-size: 24px;
	color: #ffffff;
}
.menu-left-right-column {
	display: flex;
	justify-content: flex-end;
}
.trophy-wrapper {
	flex-direction: column-reverse;
	background-color: #ef6c00;
}
.menu-trophy {
	padding-top: 3px;
	font-size: 24px;
	color: white;
}
/* 纵向分割线 */
.break-column {
	float: left;
	height: 40px;
	border-left: 1px solid #e7e7e7;
	margin: 0 20px;
}
/* 菜单栏中间项目列表 */
.program-wrapper {
	position: relative;
	height: 100%;
}
.program-list {
	margin: 10px 0;
}
.program-item {
	font-size: 14px;
	color: #212121;
}
.program-item div {
	display: flex;
	align-items: center;
}
.program-tag {
	height: auto !important;
	font-size: 6px !important;
	padding: 0 5px;
	line-height: normal;
	margin-left: 5px;
	background-color: #f56c6c;
	border-color: #f56c6c;
	color: #ffffff;
	border-radius: 4px;
}
.program-item div:hover {
	color: #00a1d6;
	cursor: pointer;
	transition: color 0.5s;
}
/* 2.热门内容 */
.pr-icon {
	color: #f0361b;
}
.basketball-icon {
	color: #41a1d7;
}

/* 热门内容中的一个视频条目 */
.video-item {
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
}
.video-title:hover,
.video-publisher span:nth-child(2):hover {
	color: #00a1d6 !important;
	transition: color 0.5s;
	cursor: pointer;
}
</style>