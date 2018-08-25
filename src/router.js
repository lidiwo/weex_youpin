/*global Vue*/
import Router from 'vue-router';
import MainPage from '@/components/MainPage';

Vue.use(Router);

module.exports = new Router({
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        // {
        //     path: '/home',
        //     name: 'HomePage',
        //     component: HomePage
        // },
        // {
        //     path: '/classify',
        //     name: 'ClassifyPage',
        //     component: ClassifyPage
        // },
        // {
        //     path: '/taste',
        //     name: 'TastePage',
        //     component: TastePage
        // },
        // {
        //     path: '/shoppingCart',
        //     name: 'ShoppingCartPage',
        //     component: ShoppingCartPage
        // },
        // {
        //     path: '/person',
        //     name: 'PersonPage',
        //     component: PersonPage
        // }
    ]
});
