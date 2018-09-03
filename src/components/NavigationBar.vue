<template>
    <div class="wrapper">
        <div class="bar-item" @click="tabTo(0)">
            <image class="bar-ic"  :src="homeUrl"></image>
            <text  class="bar-txt" :class="[this.isActive(0)]">首页</text>
        </div>
        <div class="bar-item" @click="tabTo(1)">
            <image class="bar-ic"  :src="classifyUrl"></image>
            <text  class="bar-txt" :class="[this.isActive(1)]">分类</text>
        </div>
        <div class="bar-item" @click="tabTo(2)">
            <image class="bar-ic"  :src="tasteUrl"></image>
            <text  class="bar-txt" :class="[this.isActive(2)]">品味</text>
        </div>
        <div class="bar-item" @click="tabTo(3)">
            <image class="bar-ic"  :src="shoppingCartUrl"></image>
            <text  class="bar-txt" :class="[this.isActive(3)]">购物车</text>
        </div>
        <div class="bar-item" @click="tabTo(4)" >
            <image class="bar-ic" :src="personUrl"></image>
            <text  class="bar-txt" :class="[this.isActive(4)]">个人</text>
        </div>
    </div>
</template>
<script>
    var modal = weex.requireModule('modal')
    export default {
        name: "navigationBar",
        data:function() {
            return {
                selectPosition: 0,
                homeUrl: "src/assets/images/tab_01_0.png",
                classifyUrl: "src/assets/images/tab_02_0.png",
                tasteUrl: "src/assets/images/tab_03_0.png",
                shoppingCartUrl: "src/assets/images/tab_04_0.png",
                personUrl: "src/assets/images/tab_05_0.png",
            }
        },
        methods: {
            isActive:function(flag){
                return this.selectPosition === flag ?'bar-active':'bar-noactive'
            },
            tabTo: function (key) {
                if(this.selectPosition===key){
                    return
                }
                this.selectPosition = key
                this.homeUrl = (0=== this.selectPosition) ? "http://hehanzhao.com/image/tab_01_1.png" : "http://hehanzhao.com/image/tab_01_0.png";
                this.classifyUrl = (1 === this.selectPosition) ? "http://hehanzhao.com/image/tab_02_1.png" : "http://hehanzhao.com/image/tab_02_0.png";
                this.tasteUrl = (2 === this.selectPosition) ? "http://hehanzhao.com/image/tab_03_1.png" : "http://hehanzhao.com/image/tab_03_0.png";
                this.shoppingCartUrl = (3 === this.selectPosition) ? "http://hehanzhao.com/image/tab_04_1.png" : "http://hehanzhao.com/image/tab_04_0.png";
                this.personUrl = (4=== this.selectPosition) ? "http://hehanzhao.com/image/tab_05_1.png" : "http://hehanzhao.com/image/tab_05_0.png";
                this.$emit('selectIndex',this.selectPosition);
               // this.$router.push('/' + key);
            }
        },
        created: function () {
            this.homeUrl = (0 === this.selectPosition) ? "http://hehanzhao.com/image/tab_01_1.png" : "http://hehanzhao.com/image/tab_01_0.png";
            this.classifyUrl = (1 === this.selectPosition) ? "http://hehanzhao.com/image/tab_02_1.png" : "http://hehanzhao.com/image/tab_02_0.png";
            this.tasteUrl = (2 === this.selectPosition) ? "http://hehanzhao.com/image/tab_03_1.png" : "http://hehanzhao.com/image/tab_03_0.png";
            this.shoppingCartUrl = (3 === this.selectPosition) ? "http://hehanzhao.com/image/tab_04_1.png" : "http://hehanzhao.com/image/tab_04_0.png";
            this.personUrl = (4 === this.selectPosition) ? "http://hehanzhao.com/image/tab_05_1.png" : "http://hehanzhao.com/image/tab_05_0.png";
        },
    }
</script>
<style scoped>
    .wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .bar-item {
        flex: 1;
    }
    .bar-active{
        color:#845F3F;
    }
    .bar-noactive{
        color:#9B7E58;
    }
    .bar-ic {
        align-self: center;
        margin-top: 10px;
        width: 48px;
        height: 48px;
    }
    .bar-txt{
        margin-top: 5px;
        text-align: center;
        font-size: 24px;
    }
</style>
