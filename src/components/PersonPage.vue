<template>
    <div class="app_content">
        <div class="user_center_header">
            <image class="bg_image" src="http://www.lidiwo.com/personal_bg_top.png"></image>
            <div class="user_center_header_one">
                <image class="personal_image personal_set "
                       src="http://www.lidiwo.com/personal_icon_set_nor.png"></image>
                <image class="personal_image personal_message"
                       src="http://www.lidiwo.com/personal_icon_message_nor.png"></image>
            </div>
            <div class="user_center_header_two">
                <div class="user_center_hend_and_username">
                    <image class="personal_logged" src="http://www.lidiwo.com/user_not_logged.png"></image>
                    <text class="personal_info">未登录</text>
                </div>

                <image class="personal_icon_right" src="http://www.lidiwo.com/icon_right_more_white.png"></image>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: "PersonPage",
        data: function () {
            return {}
        },
    }

</script>
<style scoped>
    .app_content {
        flex-direction: column;
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 750px;
        background-color: #F4F4F4;
    }

    .user_center_header {
        flex-direction: column;
        width: 750px;
        height: 323px;
    }

    .bg_image {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }

    .user_center_header_one {
        flex-direction: row;
        width: 750px;
        height: 100px;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .personal_image {
        width: 90px;
        height: 90px;
    }

    .personal_set {
        margin-right: 25px;
    }

    .personal_message {
        margin-right: 20px;
    }

    .user_center_header_two {
        width: 750px;
        height: 150px;
        padding-left: 20px;
        flex-direction: row;
        padding-right: 20px;
        align-items: center;
        justify-content:space-between;
    }
    .user_center_hend_and_username{
        flex-direction: row;
        align-items: center;
    }

    .personal_logged{
        width: 150px;
        height: 150px;
    }
    .personal_info{
        color: white;
        font-size: 30px;
        margin-left: 25px;
    }
    .personal_icon_right{
        width: 15px;
        height: 29px;
    }
</style>
