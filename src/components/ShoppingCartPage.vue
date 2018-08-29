<template>
    <div class="app_wrapper">
        <div class="title_container">
            <text class="taste_title">购物车</text>
            <div class="edit_shopping_car_container">
                <text class="edit_shopping_car" :style="{visibility:isLoggingSuccess?'visible': 'hidden' }">编辑</text>
            </div>
        </div>
        <div class="app_content">
            <div class="no_logging">
                <image style="width:213px;height:183px;" src="http://www.lidiwo.com/cart_empty.png"></image>
                <text class="hite_info">登录后才能看到商品哦~</text>
                <text class="go_logging">立即登录</text>
            </div>
            <div class="logging_success" :style="{visibility:isLoggingSuccess?'visible': 'hidden' }">
                <text>登录成功</text>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ShoppingCartPage",
        data: function () {
            return {
                isLoggingSuccess: false,
            }
        },
    }

</script>
<style scoped>
    .app_wrapper {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 750px;
        background-color: #FAFAFC;
    }

    .title_container {
        border-bottom-color: #E6E6E6;
        border-bottom-width: 1px;
        background-color: white;
        width: 750px;
        height: 100px;
        align-items: center;
        justify-content: center;
    }

    .taste_title {
        color: #333333;
        font-size: 32px;
    }

    .edit_shopping_car_container {
        position: absolute;
        right: 0px;
        top: 0px;
        bottom: 0px;
        justify-content: center;
    }

    .edit_shopping_car {
        padding-left: 25px;
        padding-right: 25px;
        font-size: 27px;
        color: #444444;
    }

    .app_content {
        position: absolute;
        top: 100px;
        bottom: 0px;
        width: 750px;
        justify-content: center;
        align-items: center;
    }

    .logging_success {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 750px;
        background-color: red;
    }

    .no_logging {
        flex-direction: column;
        width: 750px;
        align-items: center;
    }

    .hite_info {
        margin-top: 40px;
        color: #999999;
        font-size: 28px;

    }

    .go_logging {
        margin-top: 30px;
        color: #777777;
        font-size: 32px;
        border-bottom-color: #AAAAAA;
        border-top-color: #AAAAAA;
        border-left-color: #AAAAAA;
        border-right-color: #AAAAAA;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-right-width: 1px;
        border-left-width: 1px;
        border-bottom-right-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-right: 40px;
        padding-left: 40px;
    }
</style>
