<template recyclable>
    <div class="content">
        <div class="pic_item" v-for="item in menupicture['items']">
            <image class="item_iamge" :src="item.pic_url"></image>
            <text class="item_text">{{item.title}}</text>
        </div>
    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    export default {
        name: "RecommendModule2",
        props: ["menupicture"],
        data: function () {
            return {}
        }
    }
</script>
<style scoped>
    .content {
        flex-direction: row;
        width: 750px;
        height: 175px;
        background-color: white;
    }

    .pic_item {
        align-items: center;
        flex: 1;
        flex-direction: column;
        padding-right: 15px;
        padding-left: 15px;
        padding-top: 20px;
    }

    .item_iamge {
        width: 90px;
        height: 90px;
    }

    .item_text {
        margin-top: 10px;
        font-size: 25px;
        color: #5A5B6B;
    }

</style>