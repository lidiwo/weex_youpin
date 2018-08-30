<template recyclable>
    <div class="content">
        <div class="flash_sale_title">
            <div class="title_container">
                <text class="title">{{flashsaleData.title}}</text>
                <div class="title_countdown" :style="{ visibility:isCountDownFinish?'hidden': 'visible'  }">
                <image  style="width: 20px;height: 20px;margin-left: 30px" src="http://www.lidiwo.com/ltp_icon_time.png"></image>
                <text style="color:#A92112;font-size: 20px;margin-left: 5px ">12点场</text>
                <wxc-countdown tpl="{h}:{m}:{s}"  @wxcOnComplete="countDownFinish()" :timeBoxStyle="timeBoxStyle"  :timeTextStyle="timeTextStyle" :dotTextStyle="dotTextStyle" :time="flashsaleData.end_time"></wxc-countdown>
                </div>
            </div>
            <div class="title_more">
                <text class="more_text"> 更多</text>
                <image class="more_img" src="http://www.lidiwo.com/arrow_rounded.png"></image>
            </div>
        </div>
        <scroller class="content_scroller" show-scrollbar="false" scroll-direction="horizontal" offset-accuracy="5px">
            <div class="flash_sale_content" v-for="index in flashsaleData['goods'].length">
                <div class="goods_main_image_container">
                    <image class="goods_main_image" :src="flashsaleData['goods'][index-1].imgs.img800"></image>
                    <div class="goods_discount_container" :style="{visibility:isEmpty(flashsaleData['goods'][index-1].discount_desc)?'hidden':'visible' }">
                        <text class="goods_discount" >{{flashsaleData['goods'][index-1].discount_desc}}</text>
                    </div>
                </div>
                <text class="goods_title">{{flashsaleData['goods'][index-1].name}}</text>
                <div class="goods_money goods_money_container">
                    <div class="goods_money">
                        <text class="rmb_flag">¥</text>
                        <text class="goods_flash_price">{{flashPrice(index-1)}}</text>
                    </div>
                    <text class="goods_market_price">¥{{marketPrice(index-1)}}</text>
                </div>
            </div>
        </scroller>

    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    import { WxcCountdown } from 'weex-ui'
    import util from "@/utils/util.js";

    export default {
        name: "RecommendModule7",
        props: ["flashsaleData"],
        data: function () {
            return {
                timeBoxStyle:{
                    backgroundColor:"#A92112",
                    borderBottomRightRadius: "3px",
                    borderBottomLeftRadius: "3px",
                    borderTopRightRadius: "3px",
                    borderTopLeftRadius: "3px",
                },
                timeTextStyle:{
                    color:"#ffffff",
                    fontSize:"20px"
                },
                dotTextStyle:{
                    color:"#A92112"
                },
                isCountDownFinish:false,
            }
        },
        components: { WxcCountdown },
        methods: {
            flashPrice: function (index) {
                return util.formatMoney(this.flashsaleData['goods'][index].flash_price);
            },
            marketPrice: function (index) {
                return util.formatMoney(this.flashsaleData['goods'][index].market_price)
            },
            isEmpty:function (str) {
                return util.isEmpty(str);
            },
            countDownFinish:function () {
                this.isCountDownFinish=true;
            }
        }
    }
</script>
<style scoped>
    .content {
        margin-top: 20px;
        flex-direction: column;
        width: 750px;
        height: 438px;
        background-color: white;
    }

    .flash_sale_title {
        padding-left: 25px;
        padding-right: 25px;
        flex-direction: row;
        width: 750px;
        height: 104px;
        align-items: center;
    }
    .title_container{
        flex-direction: row;
        align-items: center;
    }

    .title_countdown{
        flex-direction: row;
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
        height: 305px;
    }

    .flash_sale_content {
        background-color: #FAF6EF;
        width: 188px;
        height: 305px;
        flex-direction: column;
        margin-right: 15px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .goods_main_image_container {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        justify-content: center;
        align-items: center;
        width: 188px;
        height: 188px;
        background-color: #FAFAFA;

    }

    .goods_main_image {
        width: 140px;
        height: 140px;
    }
    .goods_discount_container{
        position: absolute;
        left: 0px;
        bottom: 0px;
        /*background-image: linear-gradient(to right, #EF6255, #E23959);*/
        background-color: #EF6255;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }


    .goods_discount {
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 2px;
        padding-top: 2px;
        color: white;
        font-size: 20px;
    }

    .goods_title {
        margin-top: 15px;
        padding-left: 5px;
        padding-right: 10px;
        lines: 1;
        text-overflow: ellipsis;
        color: #333333;
        font-size: 28px;
    }

    .goods_money_container {
        padding-left: 5px;
        margin-top: 10px;
    }

    .goods_money {
        flex-direction: row;
        align-items: flex-end;
    }

    .rmb_flag {
        color: #A92112;
        margin-bottom: 5px;
        font-size: 22px;
    }

    .goods_flash_price {
        color: #A92112;
        font-size: 32px;
    }

    .goods_market_price {
        margin-left: 8px;
        margin-bottom: 3px;
        font-size: 22px;
        color: #979797;
        text-decoration: line-through
    }

</style>
