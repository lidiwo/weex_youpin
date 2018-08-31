<template recyclable>
    <div class="content">
        <div class="taste_live_title">
            <text class="title">专属推荐</text>
            <div class="title_more">
                <text class="more_text"> 更多</text>
                <image class="more_img" src="http://www.lidiwo.com/arrow_rounded.png"></image>
            </div>
        </div>

        <div class="goods_content" v-for="index1 in  getRowCount(2)">
            <div class="single_goods" v-for="index2 in 2">
                <div class="goods_image_container">
                    <image class="goods_image" :src="recommendData[(index1-1)*2+(index2-1)].pic_url"></image>
                </div>
                <div class="goods_summary_container">
                    <text class="goods_summary">{{recommendData[(index1-1)*2+(index2-1)].summary}}</text>
                </div>
                <text class="goods_title">{{recommendData[(index1-1)*2+(index2-1)].name}}</text>
                <div class="goods_price">
                    <text class="rmb_symbol">¥</text>
                    <text class="price_text">{{goodsPrice((index1-1)*2+(index2-1))}}</text>
                    <text class="rmb_symbol" :style="{visibility:recommendData[(index1-1)*2+(index2-1)].attr_ext.price_tag===1?'visible':'hidden'}">起</text>
                </div>
            </div>
        </div>
        <div class="bottom_content">
            <div class="line_content">
                <div class="bottom_line"></div>
                <text class="bottom_line_text">底线在此，不能更低了</text>
                <div class="bottom_line"></div>
            </div>
        </div>
    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    import util from "@/utils/util.js";

    export default {
        name: "RecommendModule10",
        props: ["recommendData"],
        data: function () {
            return {
            }
        },
        methods: {
            goodsPrice: function (index) {
                return util.formatMoney(this.recommendData[index].price);
            },

            getRowCount: function (constant) {
                return Math.floor( this.recommendData.length/constant);
            },

        },
        created: function () {

        }
    }
</script>
<style scoped>
    .content {
        margin-top: 20px;
        flex-direction: column;
        width: 750px;
        margin-top: 20px;
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

    .goods_content {
        width: 750px;
        height: 510px;
        flex-direction: row;
        padding-right: 25px;
        padding-left: 25px;
        justify-content: space-between;
    }

    .single_goods {
        flex-direction: column;
        width: 345px;
        height: 510px;
    }

    .goods_image_container {
        background-color: #FAFAFA;
        width: 345px;
        height: 316px;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .goods_image {
        width: 250px;
        height: 250px;
    }

    .goods_summary_container {
        width: 345px;
        height: 63px;
        padding-left: 5px;
        padding-right: 5px;
        background-color: #F6F2F1;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        justify-content: center;
    }

    .goods_summary {
        color: #9F8052;
        lines: 1;
        text-overflow: ellipsis;
        font-size: 25px;
    }

    .goods_title {
        color: #333333;
        margin-top: 10px;
        padding-right: 5px;
        padding-left: 5px;
        lines: 1;
        text-overflow: ellipsis;
        font-size: 28px;
    }

    .goods_price {
        padding-left: 5px;
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

    .bottom_content {
        width: 750px;
        height: 333px;
        align-items: center;
        justify-content: center;
        background-color: #FAFAFA;
    }

    .line_content{
        width: 750px;
        height: 50px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .bottom_line {
        width: 150px;
        height: 1px;
        background-color: #999999;
    }

    .bottom_line_text {
        margin-right: 30px;
        margin-left: 30px;
        font-size: 22px;
        color: #999999;
    }

</style>
