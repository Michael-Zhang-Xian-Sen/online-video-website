<template>
    <div id="pageHeader">
        <div id="optionsWrapper">
        </div>
        <div id="userWrapper">
        </div>
    </div>    
</template>

<script>
export default {
    name:"PageHeader",
    data(){
        return {
        }
    }
    
}
</script>

<style scoped>
#pageHeader{
    height: 56px;
    width: 100%;
    padding:10px 24px;
    background-color: #ffffff;
    box-sizing: border-box;
}
#leftWrapper{
    float: left;
    width: 40%;;
}
#middleWrapper{
    float:left;
    width: 40%;
}
#wraper{
    float: left;
    width: 20%;
}
</style>