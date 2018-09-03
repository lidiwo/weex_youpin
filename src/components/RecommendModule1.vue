<template recyclable>
    <div class="content">
        <slider auto-play="true" interval="3000" scrollable="true" infinite="true" show-indicators="false" @change="changeHandler($event)">
            <div v-for="item in swipebanner['items']">
                <image class="image_swipebanner" placeholder="http://hehanzhao.com/image/banner_placeholder.png"
                       :src="item.pic_url"></image>
            </div>
        </slider>
        <custom_indicator class="indicator" :indicatorCount="swipebanner['items'].length" :index="selectIndex"></custom_indicator>
    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    import CustomIndicator from "@/components/CustomIndicator";

    export default {
        name: "RecommendModule1",
        props: ["swipebanner"],
        data: function () {
            return {
                selectIndex:0,
            }
        },
        components: {
            "custom_indicator": CustomIndicator,
        },
        methods:{
            changeHandler:function (event) {
                this.selectIndex=event.index;
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

    .indicator{
        position: absolute;
        left: 0px;
        bottom: 0px;
    }
</style>
