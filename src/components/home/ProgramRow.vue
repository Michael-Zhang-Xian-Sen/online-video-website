<template>
	<div class="program-row">
		<el-row class="pr-title-wrapper">
			<el-col :span="4">
				<el-row class="pr-title">
					<el-col :span="1">&nbsp;</el-col>
					<el-col :span="7" class="pr-icon-wrapper">
						<slot name="icon"></slot>
					</el-col>
					<el-col class="pr-title-text" :span="16">
						<span>{{title}}</span>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
		<!-- 内容item -->
		<el-row>
			<el-col :span="4">
				<div class="video-item">
					<img src="@/assets/image/basketball.jpg" @click="routerPush('/video/video-id')" />
					<div class="video-info">
						<span class="video-title" @click="routerPush('/video/video-id')">三十天精通篮球</span>
						<div class="video-publisher">
							<span>作者：</span>
							<span>蔡徐坤</span>
						</div>
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
</template>

<script>
import { routerPush } from "@/utils/vue_router_util.js";

export default {
	name: "ProgramRow",
	props: {
		title: {
			type: String,
			required: true
		}
	},
	methods: {
		routerPush(path) {
			routerPush.call(this, path);
		}
	}
};
</script>

<style scoped>
.program-row {
	margin: 15px 0 30px 0;
}
/* 2.视频行 */
.pr-title-wrapper {
	margin: 10px 0;
}
.pr-title {
	display: flex;
	align-items: center;
}
.pr-icon-wrapper {
	display: flex;
	justify-content: center;
	font-size: 36px;
}

.pr-title-text {
	font-size: 24px;
}
.pr-title-text span {
	cursor: pointer;
}
.pr-title-text span:hover {
	color: #00a1d6;
	cursor: pointer;
	transition: color 0.5s;
}
/* 视频行中的每一个视频条目 */
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