<template recyclable>
    <div class="content">
        <div class="nominate_title">
            <text class="title">{{recommendData.title}}</text>
            <div class="title_more">
                <text class="more_text"> 更多</text>
                <image class="more_img" src="http://hehanzhao.com/image/arrow_rounded.png"></image>
            </div>
        </div>
        <div class="nominate_large_pic" :style="nominate_large_pic_bg">
            <div class="large_pic_flag1">
                <text class="text_title" :style="large_pic_title">{{recommendData['items'][0].title}}</text>
                <text class="text_subtitle" :style="large_pic_subtitle">{{recommendData['items'][0].subtitle}}</text>
                <div class="large_pic_tag_text_container" :style="large_pic_tag_text">
                    <text class="large_pic_tag_text" style="color: white">{{recommendData['items'][0].tag_text}}</text>
                </div>
            </div>
            <div class="large_pic_flag2">
                <image class="nominate_main_image" :src="recommendData['items'][0].pic_url"></image>
            </div>
        </div>
        <div class="nominate_small_pic">
            <div class="small_pic1" :style="small_pic1_bg">
                <text class="text_title" :style="small_pic1_title">{{recommendData['items'][1].title}}</text>
                <text class="text_subtitle" :style="small_pic1_subtitle">{{recommendData['items'][1].subtitle}}</text>
                <div class="small_pic_container">
                    <image class="small_pic" :src="recommendData['items'][1].pic_url"></image>
                </div>
            </div>
            <div class="small_pic2" :style="small_pic2_bg">
                <text class="text_title" :style="small_pic2_title">{{recommendData['items'][2].title}}</text>
                <text class="text_subtitle" :style="small_pic2_subtitle">{{recommendData['items'][2].subtitle}}</text>
                <div class="small_pic_container">
                    <image class="small_pic" :src="recommendData['items'][2].pic_url"></image>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    export default {
        name: "RecommendModule3",
        props: ["recommendData"],
        data: function () {
            return {
                nominate_large_pic_bg: {
                    backgroundColor: this.recommendData['items'][0].bg_color
                },
                large_pic_title: {
                    color: this.recommendData['items'][0].title_color,

                },
                large_pic_subtitle: {
                    color: this.recommendData['items'][0].subtitle_color,
                },
                large_pic_tag_text: {
                    backgroundColor: this.recommendData['items'][0].tag_color
                },

                small_pic1_bg: {
                    backgroundColor: this.recommendData['items'][1].bg_color
                },
                small_pic1_title: {
                    color: this.recommendData['items'][1].title_color,
                },
                small_pic1_subtitle: {
                    color: this.recommendData['items'][1].subtitle_color,
                },
                small_pic2_bg: {
                    backgroundColor: this.recommendData['items'][2].bg_color
                },
                small_pic2_title: {
                    color: this.recommendData['items'][2].title_color,
                },
                small_pic2_subtitle: {
                    color: this.recommendData['items'][2].subtitle_color,
                },
            }
        }
    }
</script>
<style scoped>
    .content {
        flex-direction: column;
        width: 750px;
        height: 660px;
        background-color: white;
        padding-left: 25px;
        padding-right: 25px;
    }

    .nominate_title {
        flex-direction: row;
        width: 700px;
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
        right: 0px;
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

    .nominate_large_pic {
        flex-direction: row;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 700px;
        height: 250px;
    }

    .large_pic_flag1 {
        flex: 1;
        flex-direction: column;
        padding-top: 25px;
        padding-left: 25px;
    }

    .large_pic_flag2 {
        flex: 1;
    }

    .text_title {
        font-size: 30px;
    }

    .text_subtitle {
        margin-top: 5px;
        font-size: 25px;
    }

    .nominate_main_image {
        position: absolute;
        top: 25px;
        right: 40px;
        width: 294px;
        height: 196px;
    }

    .large_pic_tag_text_container {
        margin-top: 15px;
        align-items: center;
        height: 50px;
        width: 150px;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        justify-content: center;
    }

    .large_pic_tag_text {
        font-size: 25px;
    }

    .nominate_small_pic {
        flex-direction: row;
        margin-top: 4px;
        width: 700px;
        height: 271px;
    }

    .small_pic1 {
        flex-direction: column;
        flex: 1;
        margin-right: 2px;
        border-bottom-left-radius: 10px;
        padding-top: 25px;
        padding-left: 25px;
    }

    .small_pic2 {
        flex-direction: column;
        flex: 1;
        margin-left: 2px;
        border-bottom-right-radius: 10px;
        padding-top: 25px;
        padding-left: 25px;
    }

    .small_pic_container {
        margin-right: 25px;
        align-items: center;
        justify-content: center;
    }

    .small_pic {
        width: 210px;
        height: 140px;
    }
</style>
