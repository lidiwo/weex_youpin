<template>
    <div class="app-wrapper">
        <div class="r_box_container" ref="r_box_container">
            <div class="r-box" v-for="flag in 5" :style="{left:(flag-1)*750}">
                <home_page v-if="flag===1"></home_page>
                <classify_page v-if="flag===2"></classify_page>
                <taste_page v-if="flag===3"></taste_page>
                <shopping_cart_page v-if="flag===4"></shopping_cart_page>
                <person_page v-if="flag===5"></person_page>
            </div>
        </div>
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
    const animation = weex.requireModule('animation');
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

                const el = this.$refs.r_box_container;

                const dit = 750 * index;
                animation.transition(el, {
                    styles: {
                        transform: 'translateX(-' + dit + 'px)'
                    },
                    duration: 1, // ms
                    timingFunction: 'ease',
                    delay: 0 // ms
                }, function () {

                })
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

    .r_box_container {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 3750px;
        bottom: 100px;
    }

    .r-box {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
    }
</style>
