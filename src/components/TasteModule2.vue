<template>
    <div class="taste_wrapper">
        <div class="module_title_container">
            <text class="module_title">{{contentTitle}}</text>
        </div>
        <div v-for="index in contentData.length">
            <div class="weekly_magazine" v-if="contentData[index-1].editorName==='pinwei_home_big_article' ">
                <div class="weekly_magazine_main_image_container">
                    <image class="weekly_magazine_main_image" :src="contentData[index-1].pic_url"></image>
                </div>
                <scroller class="weekly_magazine_scroller" show-scrollbar="false" scroll-direction="horizontal">
                    <div class="weekly_magazine_content_container"
                         v-for="goodsIndex in contentData[index-1]['goods_list'].length">
                        <image class="weekly_magazine_goods_image"
                               :src="contentData[index-1]['goods_list'][goodsIndex-1].pic_url"></image>
                        <text class="weekly_magazine_goods_title">{{contentData[index-1]['goods_list'][goodsIndex-1].name}}
                        </text>
                        <text class="weekly_magazine_goods_price">¥{{formatPrice(contentData[index-1]['goods_list'][goodsIndex-1].price_min)}}
                        </text>
                    </div>
                </scroller>
            </div>
            <div class="special_column" v-else-if="contentData[index-1].editorName==='pinwei_home_article_cover'">
                <image class="special_column_iamge" :src="contentData[index-1].pic_url"></image>
                <text class="special_column_title">{{contentData[index-1].title}}</text>
                <text class="special_column_subtitle">{{contentData[index-1].subtitle}}</text>
                <div class="special_column_discover_container">
                    <text class="special_column_discover">去发现</text>
                </div>
            </div>
            <div class="special_column_image_grid" v-else-if="contentData[index-1].editorName==='pinwei_home_image_grid'">
                <div  class="image_grid_horizontal" v-for="index1 in contentData[index-1]['pics'].length/2">
                    <div class="image_grid_vertical" v-for="index2 in 2">
                        <image class="show_image" :src="contentData[index-1]['pics'][(index1-1)*2+(index2-1)].pic_url"></image>
                    </div>
                </div>
            </div>
            <div v-else>
                <text>{{contentData[index-1].editorName}}</text>
            </div>
        </div>
    </div>
</template>
<script>
    import util from "@/utils/util.js";

    export default {
        name: "TasteModule1",
        props: ['contentData', 'contentTitle'],
        data: function () {
            return {}
        },
        methods: {
            formatPrice: function (price_min) {
                return util.formatMoney(price_min)
            }
        }
    }
</script>
<style scoped>
    .taste_wrapper {
        margin-top: 20px;
        background-color: white;
        flex-direction: column;
    }

    .module_title_container {
        width: 750px;
        height: 97px;
        justify-content: center;
        align-items: center;
    }

    .module_title {
        color: #333333;
        font-size: 30px;
    }

    .weekly_magazine {
        width: 750px;
        height: 542px;
        background-color: white;
        flex-direction: column;
    }

    .weekly_magazine_main_image_container {
        width: 750px;
        height: 197px;
        justify-content: center;
        align-items: center;
    }

    .weekly_magazine_main_image {
        width: 710px;
        height: 197px;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }

    .weekly_magazine_scroller {
        margin-top: 15px;
        flex-direction: row;
        width: 750px;
        height: 323px;
        padding-left: 20px;
    }

    .weekly_magazine_content_container {
        width: 212px;
        height: 323px;
        margin-right: 20px;
        flex-direction: column;
    }

    .weekly_magazine_goods_image {
        width: 212px;
        height: 212px;
        background-color: #FAFAFA;
    }

    .weekly_magazine_goods_title {
        lines: 1;
        text-overflow: ellipsis;
        color: #333333;
        font-size: 28px;
        margin-top: 10px;
    }

    .weekly_magazine_goods_price {
        color: #BD2222;
        font-size: 25px;
        margin-top: 10px;
    }

    .special_column {
        width: 750px;
        height: 597px;
        flex-direction: column;
        align-items: center;
    }

    .special_column_iamge {
        width: 710px;
        height: 355px;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }

    .special_column_title {
        margin-top: 20px;
        color: #333333;
        font-size: 30px;
    }

    .special_column_subtitle {
        margin-top: 20px;
        color: #999999;
        font-size: 25px;
    }

    .special_column_discover_container{
        background-color: #997E66;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 20px;
    }
    .special_column_discover{
        font-size: 30px;
        color: white;
    }

    .special_column_image_grid {
        width: 750px;
        height: 385px;
        flex-direction: column;
        align-items: center;
    }

    .image_grid_horizontal{
        width: 710px;
        height: 174px;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .image_grid_vertical{
        width: 348px;
        height: 174px;
    }

    .show_image{
        width: 348px;
        height: 174px;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }

</style>
