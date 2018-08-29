<template>
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
    .app_content {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 750px;
        background-color: #FAFAFC;
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
        border-top-color: #AAAAAA ;
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
