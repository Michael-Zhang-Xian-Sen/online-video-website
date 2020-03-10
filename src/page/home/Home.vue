<template>
	<div>
        <PageHeader></PageHeader>
		<div>
            这是主页
        </div>
	</div>
</template>

<script>
import PageHeader from "@/components/header/PageHeader.vue"

export default {
    name: "Home",
    components:{
        PageHeader
    }
};
</script>

<style scoped>
</style>