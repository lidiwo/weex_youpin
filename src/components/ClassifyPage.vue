<template>
    <div class="app_content">
        <div class="title_content">
            <div class="title_container">
                <image class="title_search_icon" src="http://www.lidiwo.com/icon_search.png"></image>
                <text class="title_search_text">纯米超级品牌日</text>
            </div>
        </div>
        <div class="classify_content">
            <div class="classify_title">

            </div>

            <div class="classify_goods">

            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: "ClassifyPage",
        data: function () {
            return {}
        },
    }

</script>
<style scoped>
    .app_content {
        flex-direction: column;
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 750px;
        background-color: white;
    }

    .title_content {
        width: 750px;
        height: 100px;
        background-color: white;
        border-bottom-width: 1px;
        border-bottom-color: #E5E5E5;
    }

    .title_container {
        position: absolute;
        top: 18px;
        bottom: 18px;
        right: 30px;
        left: 30px;
        background-color: #F4F4F4;
        flex-direction: row;
        align-items: center;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .title_search_icon {
        margin-left: 20px;
        width: 45px;
        height: 45px;
    }

    .title_search_text {
        margin-left: 20px;
        color: #CCCCCC;
    }

    .classify_content {
        position: absolute;
        top: 100px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        flex-direction: row;
    }

    .classify_title {
        flex: 1;
        background-color: yellow;
    }

    .classify_goods {
        flex: 3;
        background-color: #0088fb;
    }

</style>

