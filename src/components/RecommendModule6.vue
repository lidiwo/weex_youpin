<template recyclable>
    <div class="content" :style="content_bg">
        <div class="goods_content">
            <text class="class_title">星品驾到</text>
            <text class="main_title">{{starProductData['items'][0].attr_ext.custom_name}}</text>
            <text class="sub_title">{{starProductData['items'][0].attr_ext.custom_summary}}</text>
            <div class="goods_price">
                <text class="rmb_symbol">¥</text>
                <text class="price_text">{{goodsPrice()}}</text>
                <text class="rmb_symbol" :style="{visibility:starProductData['items'][0].attr_ext.price_tag===1?'visible':'hidden'}">起</text>
            </div>

            <div class="saled_count_container">
                <text class="saled_count">{{starProductData['items'][0].saled_count}}</text>
                <text class="saled_count_flag">件已售</text>

            </div>

        </div>
        <div class="goods_iamge_container">
            <image class="goods_iamge" :src="starProductData['items'][0].pic_url"></image>
        </div>
    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    import util from "@/utils/util.js";

    export default {
        name: "RecommendModule6",
        props: ["starProductData"],
        data: function () {
            return {
                content_bg: {
                    backgroundColor: this.starProductData.config.bg_color
                }
            }
        },
        methods: {
            goodsPrice: function () {
                return util.formatMoney(this.starProductData['items'][0].price_min)
            }
        }
    }
</script>
<style scoped>
    .content {
        margin-top: 20px;
        width: 750px;
        height: 309px;
        flex-direction: row;
        padding-top: 30px;
        padding-right: 30px;
        padding-left: 30px;
        padding-bottom: 30px;
    }

    .goods_content{

    }

    .class_title {
        border-bottom-color: #8B643E;
        border-top-color: #8B643E;
        border-right-color: #8B643E;
        border-left-color: #8B643E;
        border-bottom-width: 2px;
        border-top-width: 2px;
        border-right-width: 2px;
        border-left-width: 2px;
        border-bottom-right-radius: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        text-align: center;
        font-size: 28px;
        width: 130px;
        color: #8B643E;
    }

    .main_title {
        margin-top: 10px;
        font-size: 30px;
        color: #333333;
    }

    .sub_title {
        margin-top: 5px;
        font-size: 25px;
        color: #B8B7B3;
    }

    .goods_iamge_container {
        position: absolute;
        top: 30px;
        right: 30px;
        width: 320px;
        height: 249px;
        justify-content: center;
        align-items: center;
    }

    .goods_iamge {
        width: 220px;
        height: 220px;
    }

    .goods_price {
        flex-direction: row;
        margin-top: 10px;
        align-items: flex-end;
    }

    .rmb_symbol {
        margin-bottom: 3px;
        font-size: 20px;
        color: #A92112;
    }

    .price_text {
        font-size: 35px;
        color: #A92112;
    }
    .saled_count_container{

        margin-top: 10px;
        width: 150px;

   justify-content: center;
        padding-bottom: 5px;
        flex-direction: row;
        background-image: linear-gradient(to right,#D1B578,#AF894D);
        align-items: flex-end;
        border-bottom-right-radius: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .saled_count{
        color: white;
        font-size: 33px;
    }
    .saled_count_flag{
        color: white;
        font-size: 18px;
        margin-bottom: 5px;
    }

</style>
