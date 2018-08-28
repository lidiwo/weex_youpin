<template>
    <div class="wrapper" :class="contentStyle">
        <div>
            <image class="title_logo" src="http://www.lidiwo.com/logo.png"></image>
        </div>

        <div class="title_search">
            <image class="title_search_icon" src="http://www.lidiwo.com/icon_search.png"></image>
            <text class="title_search_text">云米超级品牌日</text>
            <image class="title_search_scan" src="http://www.lidiwo.com/icon_scan.png"></image>
        </div>
        <div>
            <image class="title_notice" src="http://www.lidiwo.com/main_title_notice.png"></image>
        </div>

    </div>
</template>

<script>
    export default {
        name: "HomeTitle",

    }
</script>

<style scoped>
    .wrapper {

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        background-color: white;
    }

    .title_logo {
        width: 70px;
        height: 70px;
        margin-left: 20px;
        margin-top: 15px;
        margin-right: 20px;
    }

    .title_search {
        margin-top: 15px;
        text-align: center;
        flex: 1;
        height: 70px;
        background-color: #F4F4F4;
        border-radius: 8px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;

    }

    .title_search_icon {
        margin-top: 10px;
        width: 50px;
        height: 50px;
        margin-left: 20px;
    }

    .title_search_text {
        color: #CCCCCC;
        flex: 1;
        margin-left: 15px;
        font-size: 32px;
        line-height: 70px;
    }

    .title_search_scan {
        margin-top: 10px;
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }

    .title_notice {
        width: 50px;
        height: 50px;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 25px;
    }

</style>
