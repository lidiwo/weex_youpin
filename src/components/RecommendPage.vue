<template>
    <list class="list_content">
        <cell class="cell_content" v-for="(item, index) in homepageDatas ">
            <div  v-if="item.module_key==='banner'">
                <recommend_module1 :swipebanner="item.data"></recommend_module1>
            </div>
            <div v-else-if="item.module_key==='kingkong'">
                <recommend_module2 :menupicture="item.data"></recommend_module2>
            </div>
            <div class="single_image_container" v-else-if="item.module_key==='single_image'">
                <image class="single_picture" :src="item.data.pic_url"></image>
            </div>
            <div v-else-if="item.module_key==='recommend'">
                <recommend_module3  :recommendData="item.data"></recommend_module3>
            </div>
            <div v-else-if="item.module_key==='crowd_funding'">
                <recommend_module4  :crowdFundingData="item.data"></recommend_module4>
            </div>
            <div v-else-if="item.module_key==='product_hot'">
                <recommend_module5  :productHotData="item.data"></recommend_module5>
            </div>
            <div v-else-if="item.module_key==='star_product'">
                <recommend_module6  :starProductData="item.data"></recommend_module6>
            </div>
            <div v-else-if="item.module_key==='flashsale'">
                <recommend_module7  :flashsaleData="item.data"></recommend_module7>
            </div>
            <div v-else-if="item.module_key==='taste_live'">
                <recommend_module8  :tasteLiveData="item.data"></recommend_module8>
            </div>
            <div v-else-if="item.module_key==='product_category'">
                <recommend_module9  :productCategoryData="item.data"></recommend_module9>
            </div>
            <div v-else>
                <text>{{item.module_key}}--{{index}}</text>
            </div>
        </cell>
    </list>
</template>

<script>
    const modal = weex.requireModule('modal');
    import RecommendModule1 from "@/components/RecommendModule1";
    import RecommendModule2 from "@/components/RecommendModule2";
    import RecommendModule3 from "@/components/RecommendModule3";
    import RecommendModule4 from "@/components/RecommendModule4";
    import RecommendModule5 from "@/components/RecommendModule5";
    import RecommendModule6 from "@/components/RecommendModule6";
    import RecommendModule7 from "@/components/RecommendModule7";
    import RecommendModule8 from "@/components/RecommendModule8";
    import RecommendModule9 from "@/components/RecommendModule9";

    export default {
        name: "RecommendPage",
        data: function () {
            return {
                homepageDatas: [],
                recommendDatas: [],
                isFristLoad:false,
            }
        },
        components:{
            "recommend_module1":RecommendModule1,
            "recommend_module2":RecommendModule2,
            "recommend_module3":RecommendModule3,
            "recommend_module4":RecommendModule4,
            "recommend_module5":RecommendModule5,
            "recommend_module6":RecommendModule6,
            "recommend_module7":RecommendModule7,
            "recommend_module8":RecommendModule8,
            "recommend_module9":RecommendModule9,
        },
        created: function () {
            if(this.isFristLoad){
                return
            }
            this.recommendPost("homepage/main/v1002", response => {
                if (response.ok) {
                    if (response.data.message === "ok" || response.data.message === "OK") {
                        this.isFristLoad=true
                        let result1 = response.data.data.homepage;
                        let result2 = response.data.data.recommend;
                        this.homepageDatas.push(...result1['floors']);
                        this.recommendDatas.push(...result2['floors']);
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
    .single_image_container{
        width: 750px;
        height: 200px;
        align-items: center;
        background-color: #F4F4F4;
    }

    .single_picture{
        position: absolute;
        top: 25px;
        width: 750px;
        height: 150px;
    }

</style>