<template recyclable>
    <div class="content">
        <slider  auto-play="true" interval="3000" scrollable="true" infinite="true"
                show-indicators="true">
            <div v-for="item in swipebanner['items']">
                <image class="image_swipebanner" placeholder="http://www.lidiwo.com/banner_placeholder.png"
                       :src="item.pic_url"></image>
            </div>
            <indicator class="banner_indicator"></indicator>
        </slider>
    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    export default {
        name: "RecommendModule1",
        props: ["swipebanner"],
        data: function () {
            return {

            }
        }
    }
</script>
<style scoped>
    .content {
        width: 750px;
        height: 313px;
    }

    .image_swipebanner {
        width: 750px;
        height: 313px;
    }
    .banner_indicator {
        width: 200px;
        height: 20px;
        item-color: green;
        item-selected-color: red;
        item-size: 13px;
        position: absolute;
        top: 270px;
        right: 0px;
    }

</style>