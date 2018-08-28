<template>
    <div class="content">
        <div class="wrapper">
            <scroller class="scroller" show-scrollbar=false scroll-direction="horizontal">
                <text v-for="(item,index) in tabTags "
                      :class="['tb_tag',index === selectIndex?'tb_tag_select':'tb_tag_unselect']"
                      @click="click(index,$event)" :ref="'tag'+index">{{item.name}}
                </text>
                <div class="tb_tag_line" :style="tbTagLineStyle">
                    <div class="select_line">
                    </div>
                </div>

            </scroller>
            <div class="tb_dropdown">
                <image class="tb_dropdown_ico" src="http://www.lidiwo.com/main_cat_dropdown.png"></image>
            </div>
        </div>
        <slider class="slider" infinite="false" offset-x-accuracy="0.0001px" scrollable="true" keep-index="true"
                @change="onSliderChange($event)" @scroll="onSliderScroll($event)" ref="slider" :index="selectIndex">
            <div class="web_root" v-for="(item,index) in tabTags ">
                <recommend_page v-if="index==0"></recommend_page>
                <crowd_page v-else-if="index==17"></crowd_page>
                <brand_page v-else-if="index==18"></brand_page>
                <web v-else-if="0<index<17" class="web_content" :src="item.link_url"></web>
            </div>
        </slider>
    </div>
</template>

<script>
    const modal = weex.requireModule('modal');
    const dom = weex.requireModule('dom');

    import RecommendPage from "@/components/RecommendPage";
    import CrowdPage from "@/components/CrowdPage";
    import BrandPage from "@/components/BrandPage";

    const recommend = [
        {name: "推荐"}
    ];
    const other = [
        {name: "小米众筹"},
        {name: "品牌"},
    ];

    export default {
        props: ["tabs"],
        name: "HomeTabLayout",
        data: function () {
            return {
                tabTags: [],
                selectIndex: 0,
                tbTagLineStyle: {
                    transform: "",
                },
                lineOffset: 0,
                loadFinish:false,//标记是否已经成功加载数据一次
            }
        },
        components: {
            "recommend_page": RecommendPage,
            "crowd_page": CrowdPage,
            "brand_page": BrandPage,
        },

        methods: {
            click: function (index, event) {
                if (this.selectIndex === index) {
                    return
                }
                this.selectIndex = index
                const el = event.currentTarget
                dom.scrollToElement(el, {})
                this.tbTagLineStyle.transform = "translateX(" + el.style.width * index + "px)";
            },
            onSliderChange: function (event) {
                this.selectIndex = event.index
                var el = this.$refs['tag' + this.selectIndex][0];
                dom.scrollToElement(el, {});
            },
            onSliderScroll: function (event) {
                this.lineOffset = event.offsetXRatio;
                const translateX = this.selectIndex * 140 - this.lineOffset * 140;
                this.tbTagLineStyle.transform = "translateX(" + translateX + "px)";
            }
        },
        created: function () {
            if(this.loadFinish){
                return;
            }
            this.post("app/shopv3/pipe", "data={\"RNTab\":{\"model\":\"Homepage\",\"action\":\"BuildActClass\",\"parameters\":{\"id\":\"-8\"}}}", response => {
                if (response.ok) {
                    if (response.data.message === "ok"||response.data.message==="OK") {
                        this.loadFinish=true;
                        let result = response.data.result.RNTab;
                        this.tabTags.push(...recommend);
                        this.tabTags.push(...result['data']);
                        this.tabTags.push(...other);
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
            })
        }
    }
</script>

<style scoped>
    .content {
        flex-direction: column;
        position: absolute;
        margin-top: 100px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        top: 0px;
    }

    .wrapper {
        flex-wrap: nowrap;
        flex-direction: row;
        position: absolute;
        left: 0;
        right: 0;
        height: 80px;
        border-bottom-width: 2px;
        border-bottom-color: #E6E6E6;
    }

    .scroller {
        flex-direction: row;
        background-color: white;
        margin-right: 80px;
    }

    .tb_tag {
        text-align: center;
        padding-top: 15px;
        width: 140px;
        font-size: 30px;
    }

    .tb_tag_select {
        color: #997E66;
    }

    .tb_tag_unselect {
        color: #666666;
    }

    .tb_tag_line {
        transition-property: transform;
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 140px;
    }

    .select_line {
        width: 110px;
        margin-left: 15px;
        height: 8px;
        background-color: #997E66;
    }

    .tb_dropdown {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 80px;
        height: 78px;
        background-color: white;
    }

    .tb_dropdown_ico {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
    }

    .slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin-top: 80px;

    }

    .web_root {
        background-color: #F4F4F4;
        position: absolute;
        top: 0px;
        right: 0px;
        left: 0px;
        bottom: 0px;
    }

    .web_content {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }

</style>
