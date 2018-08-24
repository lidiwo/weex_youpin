<template recyclable>
    <div class="content">
        <div class="taste_live_title">
            <text class="title">{{productCategoryData.title}}</text>
            <div class="title_more">
                <text class="more_text"> 更多</text>
                <image class="more_img" src="http://www.lidiwo.com/arrow_rounded.png"></image>
            </div>
        </div>
        <div class="main_image_container">
            <image class="main_image" :src="productCategoryData.pic_url"></image>
        </div>

        <div class="goods_content" v-for="index1 in  productCategoryData['items'].length/3">
            <div class="single_goods" v-for="index2 in 3">
                <div class="goods_image_container">
                    <image class="goods_image" :src="productCategoryData['items'][(index1-1)*3+(index2-1)].pic_url"></image>
                </div>
                <text class="goods_title">{{productCategoryData['items'][(index1-1)*3+(index2-1)].name}}</text>

                <div class="goods_price">
                    <text class="rmb_symbol">¥</text>
                    <text class="price_text">{{goodsPrice((index1-1)*3+(index2-1))}}</text>
                    <text class="rmb_symbol" :style="exceed_text">起</text>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    import util from "@/utils/util.js";
    export default {
        name: "RecommendModule9",
        props: ["productCategoryData"],
        data: function () {
            return {
                exceed_text: {
                    visibility: "hidden",
                },
            }
        },
        methods:{
            goodsPrice:function (index) {
                return  util.formatMoney(this.productCategoryData['items'][index].price_min) ;
            }
        }
    }
</script>
<style scoped>
    .content {
        background-color: red;
        flex-direction: column;
        width: 750px;
        height: 1115px;
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

    .main_image_container {
        width: 750px;
        height: 170px;
        justify-content: center;
        align-items: center;
    }

    .main_image {
        width: 700px;
        height: 170px;
    }

    .goods_content {
        margin-top: 15px;
        width: 750px;
        flex-direction: row;
        height: 400px;
        padding-right: 25px;
        padding-left: 25px;
        justify-content: space-between;
    }

    .single_goods {
        flex-direction: column;
        width: 225px;
        height: 400px;
    }

    .goods_image_container {
        background-color: #F8F8F8;
        width: 225px;
        height: 225px;
        align-items: center;
        justify-content: center;
    }

    .goods_image {
        width: 180px;
        height: 180px;
    }

    .goods_title {
        margin-top: 10px;
        lines: 2;
        font-size: 28px;
        text-overflow: ellipsis;
    }

    .goods_price {
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

</style>