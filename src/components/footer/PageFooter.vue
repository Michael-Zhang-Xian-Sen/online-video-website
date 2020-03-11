<template>
	<div id="pageFooter">
		<div class="page-footer-content">
			<el-row class="website-info">
				<el-col :span="16">
					<div class="footer-item1">
						<div class="item-header">我爱运动</div>
						<div class="item-content">
							<div>这里放网站的文案。创办网站的目的等。</div>
						</div>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="footer-item1">
						<div class="item-header">帮助</div>
						<div class="item-content">
							<div>这里帮助信息？</div>
						</div>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="footer-item1">
						<div class="item-header">关于我们</div>
						<div class="item-content">
							<ul>
								<li>组长：张恩奇</li>
								<li>组员：张浩、金如宾、张皓明</li>
							</ul>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row class="other-info">
				<el-col :span="6">
					<div class="footer-item2">
						<div>
							<font-awesome-icon :icon="['fab','fa-qq']" />
						</div>
					</div>
				</el-col>
				<el-col :span="18"></el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
export default {
	name: "PageFooter"
};
</script>

<style scoped>
#pageFooter {
	width: 100%;
	background-color: #ebedf2;
	display: flex;
	justify-content: center;
}
.page-footer-content {
	width: 1400px;
}
/* 网站信息 */
.website-info {
	padding: 52px 0 86px 0;
	border-bottom: 2px solid #dcdfe6;
}

/* 条目内容 */
.footer-item1 .item-header {
	display: flex;
	align-items: center;
	color: #656b7b;
	font-size: 12px;
	font-weight: 500;
	height: 40px;
	width: 100%;
	padding: 12px 0;
}
.footer-item1 .item-content {
	font-size: 14px;
	color: #656b7b;
	font-weight: 400;
}
.footer-item1 .item-content ul li {
	list-style: none;
}

/* 其他信息 */
.other-info {
	display: flex;
	align-items: center;
	height: 50px;
}
</style>