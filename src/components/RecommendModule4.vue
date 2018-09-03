<template recyclable>
    <div class="content">
        <div class="crowd_funding_title">
            <text class="title">{{crowdFundingData.title}}</text>
            <div class="title_more">
                <text class="more_text"> 更多</text>
                <image class="more_img" src="http://hehanzhao.com/image/arrow_rounded.png"></image>
            </div>
        </div>
        <div class="crowd_funding_large_pic">
            <div class="large_pic_one">
                <div class="large_pic_flag1">
                    <text class="text_title">{{crowdFundingData['items'][0].attr_ext.custom_name}}</text>
                    <text class="text_subtitle">{{crowdFundingData['items'][0].attr_ext.custom_summary}}</text>
                    <div class="main_goods_price">
                        <text class="rmb_symbol">¥</text>
                        <text class="price_text">{{goodsPrice(0)}}</text>
                        <text class="rmb_symbol" :style="{visibility:crowdFundingData['items'][0].attr_ext.price_tag===1?'visible':'hidden'}">起</text>
                    </div>
                </div>
                <div class="large_pic_flag2">
                    <image class="crowd_funding_main_image" :src="crowdFundingData['items'][0].pic_url"></image>
                </div>
            </div>
            <div class="large_pic_two">
                <div class="large_pic_two_crowd_funding_progress1">
                    <div style="flex-direction: row;height: 40px;  align-items: center;justify-content: center; ">
                        <text style="font-size: 20px;color:#A92112 ;text-align: center ">{{crowdFundingData['items'][0].saled_count}}</text>
                        <text style="font-size: 20px;color:#CCCCCC ;text-align: center"> / {{crowdFundingData['items'][0].target_count}}人支持</text>
                        <div class="crowd_funding_main_goods_tags"
                             :style="{backgroundColor:item.color,visibility:crowdFundingGoodsTagStatus(crowdFundingData['items'][0]['tags'])?'hidden':'visible'}"
                             v-for="item in crowdFundingData['items'][0]['tags']">
                            <text style="font-size: 20px;color: white ">{{item.name}}</text>
                        </div>
                    </div>
                    <text style="font-size: 20px;color:#A92112;">{{crowdFundingProgress(0)}}%</text>
                </div>
                <div class="large_pic_two_crowd_funding_progress2" :style="{width:crowdFundingProgressWidth(700,0)}">
                </div>
            </div>
        </div>
        <div class="crowd_funding_small_pic">
            <div class="small_pic1">
                <div class="small_pic1_one">
                    <text class="text_title">{{crowdFundingData['items'][1].attr_ext.custom_name}}</text>
                    <div class="small_pic_container">
                        <div class="goods_price">
                            <text class="rmb_symbol">¥</text>
                            <text class="price_text">{{goodsPrice(1)}}</text>
                            <text class="rmb_symbol" :style="{visibility:crowdFundingData['items'][1].attr_ext.price_tag===1?'visible':'hidden'}">起</text>
                        </div>
                        <image class="small_pic" :src="crowdFundingData['items'][1].pic_url"></image>
                    </div>
                </div>
                <div class="small_pic1_two">
                    <div class="small_pic1_two_crowd_funding_progress1">
                        <div style="flex-direction: row;height: 40px;  align-items: center;justify-content: center; ">
                            <text style="font-size: 20px;color:#A92112 ;text-align: center ">{{crowdFundingData['items'][1].saled_count}}</text>
                            <text style="font-size: 20px;color:#CCCCCC ;text-align: center">人支持</text>
                            <div class="crowd_funding_main_goods_tags"
                                 :style="{backgroundColor:item.color,visibility:crowdFundingGoodsTagStatus(crowdFundingData['items'][1]['tags'])?'hidden':'visible'}"
                                 v-for="item in crowdFundingData['items'][1]['tags']">
                                <text style="font-size: 20px;color: white ">{{item.name}}</text>
                            </div>
                        </div>
                        <text style="font-size: 20px;color:#A92112;">{{crowdFundingProgress(1)}}%</text>
                    </div>
                    <div class="large_pic_two_crowd_funding_progress2 small_pic1_progressbar"
                         :style="{width:crowdFundingProgressWidth(348,1)}">
                    </div>
                </div>
            </div>
            <div class="small_pic2">
                <div class="small_pic1_one">
                    <text class="text_title">{{crowdFundingData['items'][2].attr_ext.custom_name}}</text>
                    <div class="small_pic_container">
                        <div class="goods_price">
                            <text class="rmb_symbol">¥</text>
                            <text class="price_text">{{goodsPrice(2)}}</text>
                            <text class="rmb_symbol" :style="{visibility:crowdFundingData['items'][2].attr_ext.price_tag===1?'visible':'hidden'}">起</text>
                        </div>
                        <image class="small_pic" :src="crowdFundingData['items'][2].pic_url"></image>
                    </div>
                </div>

                <div class="small_pic1_two">
                    <div class="small_pic1_two_crowd_funding_progress1">
                        <div style="flex-direction: row;height: 40px;  align-items: center;justify-content: center; ">
                            <text style="font-size: 20px;color:#A92112 ;text-align: center ">{{crowdFundingData['items'][2].saled_count}}</text>
                            <text style="font-size: 20px;color:#CCCCCC ;text-align: center">人支持</text>
                            <div class="crowd_funding_main_goods_tags"
                                 :style="{backgroundColor:item.color,visibility:crowdFundingGoodsTagStatus(crowdFundingData['items'][2]['tags'])?'hidden':'visible'}"
                                 v-for="item in crowdFundingData['items'][2]['tags']">
                                <text style="font-size: 20px;color: white ">{{item.name}}</text>
                            </div>
                        </div>
                        <text style="font-size: 20px;color:#A92112;">{{crowdFundingProgress(2)}}%</text>
                    </div>
                    <div class="large_pic_two_crowd_funding_progress2 small_pic2_progressbar"
                         :style="{width:crowdFundingProgressWidth(348,2)}">
                    </div>
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
        methods: {
            goodsPrice: function (index) {
                return util.formatMoney(this.crowdFundingData['items'][index].price_min);
            },
            crowdFundingProgress: function (position) {
                return Math.floor((this.crowdFundingData['items'][position].saled_count / this.crowdFundingData['items'][position].target_count) * 100);
            },
            crowdFundingProgressWidth: function (width, position) {
                return this.crowdFundingProgress(position) >= 100 ? width + 'px' : Math.ceil((this.crowdFundingProgress(position) / 100) * width) + 'px';
            },
            crowdFundingGoodsTagStatus: function (tags) {
                return tags === null || tags === undefined || tags.length === 0;
            },


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
        flex-direction: column;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 700px;
        height: 310px;
        background-color: #F8F4EB;
    }

    .large_pic_one {
        flex-direction: row;
    }

    .large_pic_two {
        width: 700px;
        height: 50px;
        position: absolute;
        bottom: 0px;
        flex-direction: column;
    }

    .large_pic_two_crowd_funding_progress1 {
        width: 700px;
        height: 40px;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 25px;
        padding-left: 25px;
        align-items: center;
    }

    .crowd_funding_main_goods_tags {
        margin-left: 8px;
        padding-left: 3px;
        padding-right: 3px;
        border-bottom-right-radius: 3px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    .large_pic_two_crowd_funding_progress2 {
        height: 10px;
        background-image: linear-gradient(to right, #FFBB08, #F16B13);
    }

    .large_pic_flag1 {
        flex: 5;
        flex-direction: column;
        padding-top: 25px;
        padding-left: 25px;
    }

    .large_pic_flag2 {
        margin-top: 30px;
        flex: 4;
        flex-direction: row;
        align-items: center;
        justify-content: center;
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
        width: 230px;
        height: 230px;
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
        width: 348px;
        margin-right: 2px;
        border-bottom-left-radius: 10px;
        padding-top: 25px;

    }

    .small_pic1_one {
        padding-left: 25px;
        padding-right: 25px;
        flex-direction: column;
    }

    .small_pic1_two {
        height: 50px;
        position: absolute;
        bottom: 0px;
        right: 0px;
        left: 0px;
        flex-direction: column;
        overflow: hidden;
    }

    .small_pic1_two_crowd_funding_progress1 {
        height: 40px;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 15px;
        padding-left: 15px;
        align-items: center;
    }

    .small_pic1_progressbar{
        border-bottom-left-radius: 10px;
    }
    .small_pic2_progressbar{
        border-bottom-right-radius: 10px;
    }

    .small_pic2 {
        background-color: #F8F8F8;
        flex-direction: column;
        width: 348px;
        margin-left: 2px;
        border-bottom-right-radius: 10px;
        padding-top: 25px;
        overflow:hidden;
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
        margin-bottom: 3px;
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
