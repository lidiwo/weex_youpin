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

                    <div class="goods_color_type_container"
                         :style="{visibility:hasColor(productCategoryData['items'][(index1-1)*3+(index2-1)].color_num)?'hidden':'visible' }">
                        <text class="goods_color_type">{{productCategoryData['items'][(index1-1)*3+(index2-1)].color_num}}色可选</text>
                    </div>
                    <div class="goods_tags_container"
                         :style="{visibility:hasTags(productCategoryData['items'][(index1-1)*3+(index2-1)].tags)?'hidden':'visible' }">
                        <div class="goods_tag_text_container" :style="{backgroundColor:item.color}"
                             v-for="item in productCategoryData['items'][(index1-1)*3+(index2-1)].tags">
                            <text class="goods_tag_text">{{item.name}}</text>
                        </div>
                    </div>

                </div>
                <text class="goods_title">{{productCategoryData['items'][(index1-1)*3+(index2-1)].name}}</text>

                <div class="goods_price">
                    <text class="rmb_symbol">¥</text>
                    <text class="price_text">{{goodsPrice((index1-1)*3+(index2-1))}}</text>
                    <text class="rmb_symbol" :style="{visibility:productCategoryData['items'][(index1-1)*3+(index2-1)].attr_ext.price_tag===1?'visible':'hidden'}">起</text>
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
            }
        },
        methods:{
            goodsPrice:function (index) {
                return  util.formatMoney(this.productCategoryData['items'][index].price_min) ;
            },
            hasColor: function (color) {
                return color === null || color === undefined || color === "";
            },
            hasTags: function (tags) {
                return tags === null || tags === undefined || tags.length === 0||this.goodsTagNameIsEmpty(tags);
            },
            goodsTagNameIsEmpty:function (tags) {
                let isNameEmpty = false;
                for(let i=0;i<tags.length;i++){
                    const name=tags[i].name;
                    if(name===null||name===undefined||name===""){
                        isNameEmpty=true;
                    }
                }
                return isNameEmpty;
            },
        }
    }
</script>
<style scoped>
    .content {
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
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .goods_image {
        width: 160px;
        height: 160px;
    }



    .goods_color_type_container {
        position: absolute;
        top: 10px;
        left: 10px;
        border-bottom-color: #9F8153;
        border-top-color: #9F8153;
        border-left-color: #9F8153;
        border-right-color: #9F8153;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-right-width: 1px;
        border-left-width: 1px;
        border-bottom-right-radius: 2px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        border-top-right-radius: 2px;
        padding-right: 3px;
        padding-left: 3px;
        padding-top: 8px;
        padding-bottom: 8px;
    }

    .goods_color_type {
        font-size: 18px;
        color: #9F8153;
        width: 18px;
        word-wrap: break-word;
        text-align: center;
        line-height: 22px;
    }

    .goods_tags_container {
        width: 225px;
        height: 28px;
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        flex-direction: row;
    }

    .goods_tag_text_container {
        padding-left: 8px;
        padding-right: 8px;
        height: 28px;
        border-bottom-right-radius: 3px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }

    .goods_tag_text {
        color: white;
        font-size: 18px;
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
        margin-bottom: 3px;
        font-size: 20px;
        color: #A92112;
    }

    .price_text {
        font-size: 30px;
        color: #A92112;
    }

</style>
