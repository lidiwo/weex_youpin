<template>
    <div class="wrapper">
        <list class="wrapper" show-scrollbar="false">
            <cell >
                <div style="flex-direction: column;background-color: white">
                    <div style="width: 750px;height: 80px;align-items: center;justify-content: center">
                        <text style="color: #666666;font-size: 30px">正在众筹</text>
                    </div>

                    <div style="background-color: #EDEDED">
                        <div style="width: 750px;height: 462px;flex-direction: row;justify-content: space-between;margin-bottom: 2px " v-for="index1 in getRowCount(2,crowdingData)">
                            <div style="width: 374px;height: 462px;flex-direction: column;background-color: #0088fb" v-for="index2 in getColumnCount(2,crowdingData,index1)">

                            </div>
                        </div>
                    </div>

                </div>
            </cell>
            <cell>
                <div style="flex-direction: column;background-color: white;margin-top: 15px">
                    <div style="width: 750px;height: 80px;align-items: center;justify-content: center">
                        <text style="color: #666666;font-size: 30px">往期众筹</text>
                    </div>
                    <div style="background-color: #EDEDED">
                        <div style="width: 750px;height: 427px;flex-direction: row;justify-content: space-between;margin-bottom: 2px" v-for="index1 in getRowCount(2,crowdFinishData)">
                            <div style="width: 374px;height: 427px;flex-direction: column;background-color: white" v-for="index2 in getColumnCount(2,crowdFinishData,index1)">
                                <div style="width: 374px;height: 280px;justify-content: center;align-items: center ">
                                    <image style="width:280px;height: 280px " :src="crowdFinishData[(index1-1)*2+index2-1].pic_url"></image>
                                </div>
                                <div style="flex-direction: column;padding-right: 30px;padding-left: 30px">
                                    <text style="color: #4D453E;font-size: 25px;lines:1;text-overflow: ellipsis">{{crowdFinishData[(index1-1)*2+index2-1].attr_ext.custom_name}}</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </cell>
            <cell>
                <image style="width: 750px;height: 332px;margin-top: 15px" src="http://www.lidiwo.com/crowdfunding_statement.jpg"></image>
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
        name: "CrowdPage",
        data:function () {
            return {
                isFristLoad: false,
                crowdingData:[],
                crowdFinishData:[],

            }
        },
        methods: {
            getRowCount: function (constant,list) {
                return Math.floor(list.length / constant);
            },
            getColumnCount: function (constant,list, lines) {
                const remainder = list.length % constant;
                return lines == this.getRowCount(constant,list) ? (remainder == 0 ? constant : remainder) : constant;
            },
        },
        created: function () {
            if (this.isFristLoad) {
                return
            }
            this.post("app/shop/gpipe", "data={\"HomepageBuildHome\":{\"model\":\"Homepage\",\"action\":\"BuildHome\",\"parameters\":{\"id\":78}}}", response => {
                if (response.ok) {
                    if (response.data.message === "ok" || response.data.message === "OK") {
                        this.isFristLoad = true
                        let datas = response.data.result.HomepageBuildHome;
                        let result=datas['data']
                        for(let i=0;i<result.length;i++){
                            if(result[i].status==0){ //正在众筹
                                this.crowdingData.push(result[i])
                            }else if(result[i].status==1){//往期众筹
                                this.crowdFinishData.push(result[i]);
                            }
                        }
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
        background-color: #F4F4F4;
        flex-direction: column;
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 750px;
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
