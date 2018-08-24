<template recyclable>
    <div class="content">
        <div class="top_image">
            <image class="top_image" :src="productHotData.pic_url"></image>
        </div>
        <div class="goods_content" v-for="index1 in  productHotData['items'].length/3">
            <div class="single_goods" v-for="index2 in 3">
                <div class="goods_image_container">
                    <image class="goods_image" :src="productHotData['items'][(index1-1)*3+(index2-1)].pic_url"></image>
                </div>
                <text class="goods_title">{{productHotData['items'][(index1-1)*3+(index2-1)].name}}</text>

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
        name: "RecommendModule5",
        props: ["productHotData"],
        data: function () {
            return {
                exceed_text: {
                    visibility: "hidden",
                },
            }
        },
        methods:{
            goodsPrice:function (index) {
              return  util.formatMoney(this.productHotData['items'][index].price_min) ;
            }
        }
    }
</script>
<style scoped>
    .content {
        width: 750px;
        height: 1007px;
        margin-top: 15px;
        background-color: white;
        flex-direction: column;
    }

    .top_image {
        width: 750px;
        height: 163px;
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