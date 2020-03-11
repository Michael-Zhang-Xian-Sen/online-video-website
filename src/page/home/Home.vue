<template>
	<div>
		<div class="banner">
			<img src="@/assets/image/sports4.jpg" />
		</div>
        <div id="homeContent">
            
        </div>
	</div>
</template>

<script>

export default {
	name: "Home",
	methods: {
		test: function() {}
	}
};
</script>

<style scoped>
/* 横幅 */
.banner{
    width: 100%;
    /* overflow: hidden; */
}
.banner img{
    width: 100%;
}
/* 主页内容 */
#homeContent{
    height: 2000px;
    width: 100%;
}
</style>