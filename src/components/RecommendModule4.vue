<template recyclable>
    <div class="content">
        <div class="crowd_funding_title">
            <text class="title">{{crowdFundingData.title}}</text>
            <div class="title_more">
                <text class="more_text"> 更多</text>
                <image class="more_img" src="http://www.lidiwo.com/arrow_rounded.png"></image>
            </div>
        </div>
        <div class="crowd_funding_large_pic">
            <div class="large_pic_flag1">
                <text class="text_title">{{crowdFundingData['items'][0].attr_ext.custom_name}}</text>
                <text class="text_subtitle">{{crowdFundingData['items'][0].attr_ext.custom_summary}}</text>
                <div class="main_goods_price">
                    <text class="rmb_symbol">¥</text>
                    <text class="price_text">{{goodsPrice(0)}}</text>
                    <text class="rmb_symbol" :style="exceed_text">起</text>
                </div>

            </div>
            <div class="large_pic_flag2">
                <image class="crowd_funding_main_image" :src="crowdFundingData['items'][0].pic_url"></image>
            </div>
        </div>
        <div class="crowd_funding_small_pic">
            <div class="small_pic1">
                <text class="text_title">{{crowdFundingData['items'][1].attr_ext.custom_name}}</text>
                <div class="small_pic_container">
                    <div class="goods_price">
                        <text class="rmb_symbol">¥</text>
                        <text class="price_text">{{goodsPrice(1)}}</text>
                        <text class="rmb_symbol" :style="exceed_text">起</text>
                    </div>
                    <image class="small_pic" :src="crowdFundingData['items'][1].pic_url"></image>
                </div>
            </div>
            <div class="small_pic2">
                <text class="text_title">{{crowdFundingData['items'][2].attr_ext.custom_name}}</text>
                <div class="small_pic_container">
                    <div class="goods_price">
                        <text class="rmb_symbol">¥</text>
                        <text class="price_text">{{goodsPrice(2)}}</text>
                        <text class="rmb_symbol" :style="exceed_text">起</text>
                    </div>
                    <image class="small_pic" :src="crowdFundingData['items'][2].pic_url"></image>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    import util from "@/utils/util.js";

    export default {
        name: "RecommendModule4",
        props: ["crowdFundingData"],
        data: function () {
            return {
                exceed_text: {
                    visibility: "hidden",
                },
            }
        },
        methods:{
            goodsPrice:function (index) {
                return  util.formatMoney(this.crowdFundingData['items'][index].price_min) ;
            }
        }
    }
</script>
<style scoped>
    .content {
        margin-top: 20px;
        flex-direction: column;
        width: 750px;
        height: 765px;
        background-color: white;
        padding-left: 25px;
        padding-right: 25px;
    }

    .crowd_funding_title {
        flex-direction: row;
        width: 700px;
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
        right: 0px;
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

    .crowd_funding_large_pic {
        flex-direction: row;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 700px;
        height: 310px;
        background-color: #F8F4EB;
    }

    .large_pic_flag1 {
        flex: 1;
        flex-direction: column;
        padding-top: 25px;
        padding-left: 25px;
    }

    .large_pic_flag2 {
        flex: 1;
    }

    .text_title {
        lines: 1;
        text-overflow: ellipsis;
        font-size: 30px;
        color: #333333;
    }

    .text_subtitle {
        margin-top: 5px;
        font-size: 25px;
        color: #999999;
    }

    .crowd_funding_main_image {
        position: absolute;
        top: 25px;
        right: 40px;
        width: 235px;
        height: 235px;
    }

    .crowd_funding_small_pic {
        flex-direction: row;
        margin-top: 4px;
        width: 700px;
        height: 312px;
    }

    .small_pic1 {
        background-color: #F8F8F8;
        flex-direction: column;
        flex: 1;
        margin-right: 2px;
        border-bottom-left-radius: 10px;
        padding-top: 25px;
        padding-left: 25px;
        padding-right: 25px;
    }

    .small_pic2 {
        background-color: #F8F8F8;
        flex-direction: column;
        flex: 1;
        margin-left: 2px;
        border-bottom-right-radius: 10px;
        padding-top: 25px;
        padding-left: 25px;
        padding-right: 25px;
    }

    .small_pic_container {
        flex-direction: row;
        width: 293px;
        height: 200px;
    }

    .main_goods_price {
        flex-direction: row;
        align-items: flex-end;
        margin-top: 15px;
    }

    .goods_price {
        position: absolute;
        top: 0px;
        left: 0px;
        flex-direction: row;
        margin-top: 15px;
        align-items: flex-end;
    }

    .rmb_symbol {
        margin-bottom: 5px;
        font-size: 20px;
        color: #A92112;
    }

    .price_text {
        font-size: 30px;
        color: #A92112;
    }

    .small_pic {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 200px;
        height: 200px;
    }
</style>