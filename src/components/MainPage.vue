<template>
    <div class="app-wrapper">
        <slider class="r-box_container" :index="this.selectIndex">
            <div class="r-box" v-for="flag in 5">
                <home_page v-if="flag===1"></home_page>
                <classify_page v-if="flag===2"></classify_page>
                <taste_page v-if="flag===3"></taste_page>
                <shopping_cart_page v-if="flag===4"></shopping_cart_page>
                <person_page v-if="flag===5"></person_page>
            </div>
        </slider>
        <navigation_bar @selectIndex="getSelectIndex"></navigation_bar>
    </div>
</template>
<script>
    import NavigationBar from '@/components/NavigationBar';
    import HomePage from '@/components/HomePage';
    import ClassifyPage from '@/components/ClassifyPage';
    import TastePage from '@/components/TastePage';
    import ShoppingCartPage from '@/components/ShoppingCartPage';
    import PersonPage from '@/components/PersonPage';

    const modal = weex.requireModule('modal');
    export default {
        name: 'MainPage',
        data: function () {
            return {
                selectIndex: 0,
            }
        },
        methods: {
            getSelectIndex: function (index) {
                this.selectIndex = index;
            }
        },
        components: {
            "navigation_bar": NavigationBar,
            "home_page": HomePage,
            "classify_page": ClassifyPage,
            "taste_page": TastePage,
            "shopping_cart_page": ShoppingCartPage,
            "person_page": PersonPage,
        }
    }
</script>
<style scoped>
    .app-wrapper {
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
        flex-direction: column-reverse;
    }
    .r-box_container{
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 100px;
    }

    .r-box {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
</style>
