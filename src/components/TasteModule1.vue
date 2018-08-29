<template>
    <div class="taste_wrapper">
        <slider class="banner_slider" auto-play="true" interval="5000" infinite="true" show-indicators="false"
                scrollable="true">
            <div class="banner_image_container" v-for="item in contentData[0]['banners']">
                <image class="banner_image" :src="item.pic_url"></image>
            </div>
        </slider>
        <scroller class="kingkong_scroller" show-scrollbar="false" scroll-direction="horizontal" >
            <div class="kingkong_content_container" v-for="index in contentData[1]['items'].length">
                <image class="kingkong_image" :src="contentData[1]['items'][index-1].pic_url"></image>
                <text class="kingkong_title">{{contentData[1]['items'][index-1].title}}</text>
            </div>
        </scroller>
    </div>
</template>
<script>
    export default {
        name: "TasteModule1",
        props: ['contentData'],
        data: function () {
            return {}
        },
    }
</script>
<style scoped>
    .taste_wrapper {
        width: 750px;
        height: 580px;
        background-color: white;
        flex-direction: column;
    }

    .banner_slider {
        width: 750px;
        height: 390px;
    }

    .banner_image_container {
        width: 750px;
        height: 390px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .banner_image {
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        width: 710px;
        height: 355px;
    }

    .kingkong_scroller {
        margin-top: 5px;
        width: 750px;
        height: 167px;
        padding-left: 20px;
        flex-direction: row;
    }

    .kingkong_content_container {
        flex-direction: column;
        width: 150px;
        height: 167px;
        margin-right: 20px;
        align-items: center;
    }

    .kingkong_image {
        width: 150px;
        height: 129px;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }

    .kingkong_title {
        margin-top: 10px;
        font-size: 25px;
        color: #333333;
    }
</style>
