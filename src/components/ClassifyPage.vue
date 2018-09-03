<template>
    <div class="app_content">
        <div class="title_content">
            <div class="title_container">
                <image class="title_search_icon" src="http://hehanzhao.com/image/icon_search.png"></image>
                <text class="title_search_text">纯米超级品牌日</text>
            </div>
        </div>
        <div class="classify_content">
            <div class="classify_title_container">
                <list class="classify_title_container" show-scrollbar="false">
                    <cell v-for="(item,index) in classifyTitles " @click="onClick(index)">
                        <div :class="['item_classify_title',updataItem(index)]">
                            <text :class="['classify_title',updataItemText(index)]">{{item.name}}</text>
                            <div :class="['classify_title_flag',updataItemFlag(index)]"></div>
                        </div>
                    </cell>
                </list>
            </div>
            <div class="classify_goods_container">
                <list class="goods_scroller" show-scrollbar="false">
                    <cell>
                        <div class="main_image_cell"
                             v-if="goodsContent['HomepageGetUclassList' + classifyTitles[selectIndex].ucid]['data'][0].visiable===1">
                            <image class="main_image"
                                   :src="goodsContent['HomepageGetUclassList' + classifyTitles[selectIndex].ucid]['data'][0].pic_url"></image>
                        </div>
                    </cell>
                    <cell v-if="selectIndex===classifyTitles.length-1">
                        <div class="last_classify_tab_row" v-for="index1 in  getRowCount(4,selectIndex)">
                            <div class="last_classify_tab_column"
                                 v-for="index2 in getColumnCount(4,index1,selectIndex)">
                                <div class="brand_image_container">
                                    <image class="brand_image"
                                           :src="goodsContent['HomepageGetUclassList' + classifyTitles[selectIndex].ucid]['data'][(index1-1)*4+index2].pic_url"></image>
                                </div>
                                <text class="brand_title">{{goodsContent['HomepageGetUclassList' + classifyTitles[selectIndex].ucid]['data'][(index1-1)*4+index2].name}}</text>
                            </div>
                        </div>
                    </cell>
                    <cell v-else>
                        <div class="last_classify_tab_other_row" v-for="index1 in  getRowCount(3,selectIndex)">
                            <div class="last_classify_tab_other_column"
                                 v-for="index2 in getColumnCount(3,index1,selectIndex)">
                                <div class="goods_image_container">
                                    <image class="goods_image" :src="goodsContent['HomepageGetUclassList' + classifyTitles[selectIndex].ucid]['data'][(index1-1)*3+index2].pic_url"></image>
                                </div>
                                <text class="goods_title">{{goodsContent['HomepageGetUclassList' + classifyTitles[selectIndex].ucid]['data'][(index1-1)*3+index2].name}}</text>
                            </div>
                        </div>
                    </cell>
                </list>
            </div>
        </div>
    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    export default {
        name: "ClassifyPage",
        data: function () {
            return {
                isFristLoad: false,
                classifyTitles: [],
                goodsContent: {},
                selectIndex: 0,
            }
        },
        methods: {
            updataItem: function (index) {
                return this.selectIndex === index ? 'item_classify_title_select' : 'item_classify_title_unselect';
            },
            updataItemText: function (index) {
                return this.selectIndex === index ? 'classify_title_select' : 'classify_title_unselect';
            },
            updataItemFlag: function (index) {
                return this.selectIndex === index ? 'classify_title_flag_select' : 'classify_title_flag_unselect';
            },
            onClick: function (index) {
                this.selectIndex = index;
            },
            getRowCount: function (constant, selectPosition) {
                return Math.ceil((this.goodsContent['HomepageGetUclassList' + this.classifyTitles[selectPosition].ucid]['data'].length - 1) / constant);
            },
            getColumnCount: function (constant, lines, selectPosition) {
                const remainder = (this.goodsContent['HomepageGetUclassList' + this.classifyTitles[selectPosition].ucid]['data'].length - 1) % constant;
                return lines == this.getRowCount(constant, selectPosition) ? (remainder == 0 ? constant : remainder) : constant;
            },

            getClassifyDetails: function () {
                const mainobj = new Object();
                for (let i = 0; i < this.classifyTitles.length; i++) {
                    const parametersobj = new Object();
                    parametersobj['id'] = this.classifyTitles[i].ucid;
                    const obj = new Object();
                    obj['action'] = "GetUclassList";
                    obj['model'] = "Homepage";
                    obj['parameters'] = parametersobj;
                    mainobj['HomepageGetUclassList' + this.classifyTitles[i].ucid] = obj;
                }
                this.post("app/shopv3/pipe", "data=" + JSON.stringify(mainobj), response => {
                    if (response.ok) {
                        if (response.data.message === "ok" || response.data.message === "OK") {
                            let result = response.data.result;
                            this.goodsContent = result;
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
            },
        },
        created: function () {
            this.post("app/shopv3/pipe", "data={\"HomepageBuildClass\":{\"model\":\"Homepage\",\"action\":\"BuildClass\",\"parameters\":{}}}", response => {
                if (response.ok) {
                    if (response.data.message === "ok" || response.data.message === "OK") {
                        this.isFristLoad = true
                        let result = response.data.result.HomepageBuildClass;
                        this.classifyTitles.push(...result['data']);
                        this.getClassifyDetails();
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
    .app_content {
        flex-direction: column;
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 750px;
        background-color: white;
    }

    .title_content {
        width: 750px;
        height: 100px;
        background-color: white;
        border-bottom-width: 1px;
        border-bottom-color: #E5E5E5;
    }

    .title_container {
        position: absolute;
        top: 18px;
        bottom: 18px;
        right: 30px;
        left: 30px;
        background-color: #F4F4F4;
        flex-direction: row;
        align-items: center;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .title_search_icon {
        margin-left: 20px;
        width: 45px;
        height: 45px;
    }

    .title_search_text {
        font-size: 30px;
        margin-left: 20px;
        color: #CCCCCC;
    }

    .classify_content {
        position: absolute;
        top: 100px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        flex-direction: row;
    }

    .classify_title_container {
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        width: 187px;
    }

    .classify_goods_container {
        width: 563px;
        position: absolute;
        right: 0px;
        top: 0px;
        bottom: 0px;
    }

    .item_classify_title {
        height: 92px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .item_classify_title_select {
        background-color: white;
    }

    .item_classify_title_unselect {
        background-color: #F6F6F6;
    }

    .classify_title {
        font-size: 30px;
    }

    .classify_title_select {
        color: #9F866F;
    }

    .classify_title_unselect {
        color: #666666;
    }

    .classify_title_flag {
        position: absolute;
        top: 16px;
        left: 0px;
        width: 7px;
        height: 60px;
        background-color: #9F866F;
    }

    .classify_title_flag_select {
        visibility: visible;
    }

    .classify_title_flag_unselect {
        visibility: hidden;
    }

    .goods_scroller {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }

    .main_image_cell {
        width: 563px;
        height: 268px;
        align-items: center;
        margin-top: 15px;
    }

    .main_image {
        width: 533px;
        height: 268px;
    }

    .last_classify_tab_row {
        width: 563px;
        height: 243px;
        flex-direction: row;

        justify-content: flex-start;
    }

    .last_classify_tab_column {
        margin-left: 15px;
        margin-top: 40px;
        width: 122px;
        height: 223px;
        align-items: center;
    }

    .brand_image_container {
        width: 122px;
        height: 150px;
    }

    .brand_image {
        width: 122px;
        height: 133px;
    }

    .brand_title {
        lines: 1;
        color: #666666;
        font-size: 20px;
        text-overflow: ellipsis;
    }

    .last_classify_tab_other_row {
        width: 583px;
        height: 240px;
        flex-direction: row;
        padding-right: 15px;
        padding-left: 15px;
        justify-content: flex-start;
    }

    .last_classify_tab_other_column {
        width: 184px;
        height: 240px;
        align-items: center;
        margin-top: 20px;
    }

    .goods_image_container {
        width: 184px;
        height: 184px;
        justify-content: center;
        align-items: center;
    }

    .goods_image {
        width: 164px;
        height: 164px;
    }

    .goods_title {
        lines: 1;
        color: #666666;
        font-size: 25px;
    }

</style>

