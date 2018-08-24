<template recyclable>
    <div class="content">
        <div class="taste_live_title">
            <text class="title">{{tasteLiveData.title}}</text>
            <div class="title_more">
                <text class="more_text"> 更多</text>
                <image class="more_img" src="http://www.lidiwo.com/arrow_rounded.png"></image>
            </div>
        </div>
        <scroller class="content_scroller" show-scrollbar="false" scroll-direction="horizontal" offset-accuracy="5px">
            <div class="taste_live_content" v-for="index in tasteLiveData['items'].length">
                <image class="taste_live_image" :src="tasteLiveData['items'][index-1].pic_url"></image>
                <text class="taste_live_maintitle">{{tasteLiveData['items'][index-1].title}}</text>
                <text class="taste_live_summary">{{tasteLiveData['items'][index-1].summary}}</text>
            </div>
        </scroller>

    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    export default {
        name: "RecommendModule8",
        props: ["tasteLiveData"],
        data: function () {
            return {}
        }
    }
</script>
<style scoped>
    .content {
        margin-top: 20px;
        flex-direction: column;
        width: 750px;
        height: 472px;
        background-color: white;
    }

    .taste_live_title {
        padding-left: 25px;
        padding-right: 25px;
        flex-direction: row;
        width: 750px;
        height: 104px;
        align-items: center;
    }

    .title {
        font-weight: bold;
        font-size: 35px;
    }

    .title_more {
        flex-direction: row;
        position: absolute;
        right: 25px;
        top: 0px;
        bottom: 0px;
        align-items: center;
    }

    .more_text {
        font-size: 24px;
        color: #999999;
    }

    .more_img {
        margin-left: 8px;
        width: 30px;
        height: 30px;
    }

    .content_scroller {
        padding-left: 20px;
        flex-direction: row;
        width: 750px;
        height: 347px;
    }

    .taste_live_content {
        width: 500px;
        height: 347px;
        flex-direction: column;
        margin-right: 15px;
    }

    .taste_live_image {
        width: 500px;
        height: 250px;
        border-bottom-right-radius: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .taste_live_maintitle {
        color: #333333;
        font-size: 30px;
        lines: 1;
        text-overflow: ellipsis;
        margin-top: 15px;
    }

    .taste_live_summary {
        color: #666666;
        lines: 1;
        text-overflow: ellipsis;
        font-size: 25px;
        margin-top: 10px;
    }
</style>