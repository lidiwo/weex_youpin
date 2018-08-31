<template>
    <div class="wrapper">
        <list class="wrapper" show-scrollbar="false">
            <cell v-for="item in showDatas">
                <div class="brand_content_container">
                    <image class="brand_main_image" :src="item['data'][0].pic_url"></image>
                    <div class="brand_info_container">
                        <div style="margin-left:15px;margin-top: 15px;margin-bottom: 15px;flex-direction: row;align-items: center">
                            <image style="width: 70px ;height: 70px" :src="item.content.pic_url" ></image>
                            <div style="flex-direction: column;margin-left: 20px;">
                                <text style="color: #4D453E;font-size: 25px">{{item.content.short_name}}</text>
                                <text style="color: #666666;font-size: 20px;margin-top: 3px">{{item.content.summary}}</text>
                            </div>
                        </div>
                        <image style="width: 15px ;height: 30px;margin-right:20px " src="http://www.lidiwo.com/next.png" ></image>
                    </div>
                </div>
            </cell>

            <cell>
                <div class="bottom_content">
                    <div class="line_content">
                        <div class="bottom_line"></div>
                        <text class="bottom_line_text">底线在此，不能更低了</text>
                        <div class="bottom_line"></div>
                    </div>
                </div>
            </cell>
        </list>
    </div>
</template>

<script>
    const modal = weex.requireModule('modal');

    export default {
        name: "BrandPage",
        data: function () {
            return {
                isFristLoad: false,
                showDatas: [],
                message: JSON.parse("{\"background_img\":\"https://shop.io.mi-img.com/app/shop/img?id=shop_411bfa8d328c4ab7915509edc1401ff3.jpeg&w=530&h=255\"}"),
            }
        },
        methods: {
            getBrandMainImage: function (style) {
                return JSON.parse(style).background_img;
            }

        },
        created: function () {
            if (this.isFristLoad) {
                return
            }
            this.post("app/shop/gpipe", "data={\"HomepageBuildHome\":{\"model\":\"Homepage\",\"action\":\"BuildHome\",\"parameters\":{\"id\":79}}}", response => {
                if (response.ok) {
                    if (response.data.message === "ok" || response.data.message === "OK") {
                        this.isFristLoad = true
                        let result = response.data.result.HomepageBuildHome;
                        this.showDatas.push(...result['data']);
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
    .wrapper {
        background-color: white;
        flex-direction: column;
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 750px;
    }

    .brand_content_container {
        margin-left: 20px;
        margin-right: 20px;
        width: 710px;
        height: 442px;
        margin-top: 20px;
        border-top-color: #DADADA;
        border-bottom-color: #DADADA;
        border-right-color: #DADADA;
        border-left-color: #DADADA;
        border-bottom-width: 1px;
        border-top-width: 1px;
        border-right-width: 1px;
        border-left-width: 1px;
    }

    .brand_main_image {
        width: 710px;
        height: 342px;
    }

    .brand_info_container{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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
