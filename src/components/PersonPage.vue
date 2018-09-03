<template>
    <scroller class="personal_scroller" scroll-direction="vertical" show-scrollbar="false">
        <div class="app_content">
            <div class="user_center_header">
                <image class="bg_image" src="http://hehanzhao.com/image/personal_bg_top.png"></image>
                <div class="user_center_header_one">
                    <image class="personal_image personal_set "
                           src="http://hehanzhao.com/image/personal_icon_set_nor.png"></image>
                    <image class="personal_image personal_message"
                           src="http://hehanzhao.com/image/personal_icon_message_nor.png"></image>
                </div>
                <div class="user_center_header_two">
                    <div class="user_center_hend_and_username">
                        <image class="personal_logged" src="http://hehanzhao.com/image/user_not_logged.png"></image>
                        <text class="personal_info">未登录</text>
                    </div>
                    <image class="personal_icon_right" src="http://hehanzhao.com/image/icon_right_more_white.png"></image>
                </div>
            </div>
            <div class="personal_order_container">
                <div class="personal_order_one">
                    <text class="order_my_text">我的订单</text>
                    <div class="personal_order_all">
                        <text class="order_all_text">全部订单</text>
                        <image class="order_all_image" src="http://hehanzhao.com/image/icon_right_more.png"></image>
                    </div>
                </div>
                <div class="personal_order_two">
                    <div class="order_type" v-for="orderT in orderStatus">
                        <image class="order_type_image" :src="orderT.image"></image>
                        <text class="order_type_text">{{orderT.text}}</text>
                    </div>
                </div>
            </div>
            <div class="personal_banner">
                <image class="banner_image" :src="homepageGetSuperBanner.data['data'][0].pic_url"></image>
            </div>

            <div class="personal_service_container">
                <div class="personal_service_one">
                    <text class="order_my_text">我的服务</text>
                </div>
                <div class="personal_service_two">
                    <div class="service_type_row" v-for="index1 in getRowCount(4)">
                        <div class="service_type_column" v-for="index2 in getColumnCount(4,index1)">
                            <image class="order_type_image" :src="myService[(index1-1)*4+index2-1].big_icon"></image>
                            <text class="order_type_text">{{myService[(index1-1)*4+index2-1].name}}</text>
                            <text class="service_type_title">{{myService[(index1-1)*4+index2-1].title}}</text>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </scroller>
</template>
<script>
    const modal = weex.requireModule('modal');


    const orderType = [
        {
            image: "http://hehanzhao.com/image/personal_icon_paid_copy.png",
            text: "待付款"
        },
        {
            image: "http://hehanzhao.com/image/personal_icon_receipt.png",
            text: "待发货"
        },
        {
            image: "http://hehanzhao.com/image/personal_icon_appraisal.png",
            text: "待评价"
        },
        {
            image: "http://hehanzhao.com/image/personal_icon_return_goods.png",
            text: "退款/售后"
        },
    ];
    const serviceData = [
        {
            big_icon: "http://hehanzhao.com/image/personal_icon_group_buying.png",
            name: "拼团订单",
            title: "",
        },
        {
            big_icon: "http://hehanzhao.com/image/personal_icon_coupon_new.png",
            name: "优惠券",
            title: "",
        },
        {
            big_icon: "http://hehanzhao.com/image/personal_icon_gift_nor.png",
            name: "新人邀请",
            title: "立享红包",
        },
        {
            big_icon: "http://hehanzhao.com/image/set_icon_share.png",
            name: "分享app",
            title: "",
        },
        {
            big_icon: "http://hehanzhao.com/image/personal_icon_collection_nor.png",
            name: "我的收藏",
            title: "",
        },
        {
            big_icon: "http://hehanzhao.com/image/personal_icon_assets_nor.png",
            name: "我的资产",
            title: "积分/特权码",
        },
        {
            big_icon: "http://hehanzhao.com/image/personal_icon_address_nor.png",
            name: "地址管理",
            title: "",
        },
        {
            big_icon: "http://hehanzhao.com/image/personal_icon_service_center.png",
            name: "服务中心",
            title: "在线客服",
        },
        {
            big_icon: "http://hehanzhao.com/image/personal_icon_feedback.png",
            name: "用户反馈",
            title: "",
        },
        {
            big_icon: "http://cdn.cnbj0.fds.api.mi-img.com/miio.files/commonfile_png_b7e92d019b956aa2d705690574b193cf.png",
            name: "帮助中心",
            title: "",
        },
    ];

    export default {
        name: "PersonPage",
        data: function () {
            return {
                orderStatus: orderType,
                myService: serviceData,
                isFristLoad: false,
                groupBuyGroupBuyNoticeCount: {},
                homepageGetSuperBanner: {},
            }
        },
        methods: {
            getRowCount: function (constant) {
                return Math.ceil(this.myService.length / constant);
            },
            getColumnCount: function (constant, lines) {
                const remainder = this.myService.length % constant;
                return lines == this.getRowCount(constant) ? (remainder == 0 ? constant : remainder) : constant;
            },
        },
        created: function () {
            if (this.isFristLoad) {
                return
            }
            this.post("app/shopv3/pipe", "data={\"HomepageGetSuperBanner\":{\"model\":\"Homepage\",\"action\":\"GetSuperBanner\",\"parameters\":{}},\"GroupBuyGroupBuyNoticeCount\":{\"model\":\"GroupBuy\",\"action\":\"GroupBuyNoticeCount\",\"parameters\":{}}}", response => {
                if (response.ok) {
                    if (response.data.message === "ok" || response.data.message === "OK") {
                        this.isFristLoad = true
                        let result = response.data.result;
                        this.homepageGetSuperBanner = result.HomepageGetSuperBanner;
                    } else {
                        modal.toast({
                            message: "网络请求失败",
                            duration: 0.3
                        })
                    }
                } else {
                    modal.toast({
                        message: "服务器异常",
                        duration: 0.3
                    })
                }
            });
        }
    }

</script>
<style scoped>
    .personal_scroller{
        flex-direction: column;
    }

    .app_content {
        flex-direction: column;
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
        justify-content: space-between;
    }

    .user_center_hend_and_username {
        flex-direction: row;
        align-items: center;
    }

    .personal_logged {
        width: 150px;
        height: 150px;
    }

    .personal_info {
        color: white;
        font-size: 30px;
        margin-left: 25px;
    }

    .personal_icon_right {
        width: 15px;
        height: 29px;
    }

    .personal_order_container {
        padding-left: 20px;
        padding-right: 20px;
        width: 750px;
        height: 275px;
        background-color: white;
        flex-direction: column;
    }

    .personal_order_one {
        flex: 2;
        border-bottom-width: 1px;
        border-bottom-color: #E5E5E5;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .personal_order_two {
        flex: 3;
        flex-direction: row;
        margin-top: 15px;
    }

    .order_my_text {
        color: #333333;
        font-size: 30px;
    }

    .personal_order_all {
        flex-direction: row;
        align-items: center;
    }

    .order_all_text {
        font-size: 25px;
        color: #999999;
    }

    .order_all_image {
        width: 25px;
        height: 25px;
    }

    .order_type {
        align-items: center;
        flex-direction: column;
        width: 177px;
        height: 165px;
    }

    .order_type_image {
        width: 70px;
        height: 70px;
    }

    .order_type_text {
        margin-top: 15px;
        font-size: 27px;
        color: #666666;
    }

    .personal_banner {
        width: 750px;
        height: 217px;
    }

    .banner_image {
        width: 750px;
        height: 217px;
    }

    .personal_service_container {
        padding-left: 20px;
        padding-right: 20px;
        width: 750px;
        background-color: white;
        flex-direction: column;
    }

    .personal_service_one {
        height: 110px;
        flex-direction: row;
        align-items: center;
    }

    .personal_service_two {
        flex-direction: column;
    }

    .service_type_row {
        flex-direction: row;
        border-top-width: 1px;
        border-top-color: #E5E5E5;
    }

    .service_type_column {
        margin-top: 20px;
        flex-direction: column;
        width: 178px;
        height: 200px;
        align-items: center;
    }

    .service_type_title{
        font-size: 25px;
        color: #999999;
    }


</style>
