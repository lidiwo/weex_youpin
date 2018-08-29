<template>
    <div class="app_content">
        <div class="title_container">
            <text class="taste_title">品味</text>
        </div>
        <div class="taste_content_container">
            <list show-scrollbar="false">
                <cell v-for="(item,index) in showDatas">
                    <div v-if="item.editorName==='pure_container'">
                        <taste-module1 :contentData="item['rags']"></taste-module1>
                    </div>
                    <div v-else-if="item.editorName==='pinwei_home_floor'">
                        <taste-module2 :contentData="item['rags']" :contentTitle="item.title"></taste-module2>
                    </div>
                    <div v-else>
                        <text>{{item.editorName}}</text>
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
    </div>
</template>
<script>
    const modal = weex.requireModule('modal');
    import TasteModule1 from "@/components/TasteModule1";
    import TasteModule2 from "@/components/TasteModule2";

    export default {
        name: "TastePage",
        data: function () {
            return {
                showDatas: [],
                loadFinish: false,//标记是否已经成功加载数据一次
            }
        },
        components: {TasteModule1, TasteModule2},
        created: function () {
            if (this.loadFinish) {
                return;
            }

            this.post("app/shopv3/pipe", "data={\"PinweiGetHome\":{\"model\":\"Pinwei\",\"action\":\"GetHome\",\"parameters\":{}}}", response => {
                if (response.ok) {
                    if (response.data.message === "ok" || response.data.message === "OK") {
                        this.loadFinish = true;
                        let result = response.data.result.PinweiGetHome.data;
                        this.showDatas.push(...result['rags']);
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
    .app_content {
        flex-direction: column;
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 750px;
        background-color: #F6F6F6;
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

    .taste_content_container {
        width: 750px;
        position: absolute;
        top: 100px;
        bottom: 0px;
    }

    .bottom_content {
        width: 750px;
        height: 333px;
        align-items: center;
        justify-content: center;
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
