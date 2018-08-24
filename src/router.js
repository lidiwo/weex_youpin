/*global Vue*/
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import ClassifyPage from '@/components/ClassifyPage';
import TastePage from '@/components/TastePage';
import ShoppingCartPage from '@/components/ShoppingCartPage';
import PersonPage from '@/components/PersonPage';

Vue.use(Router);

module.exports = new Router({
    routes: [
        {path: '/', redirect: '/home'},
        {
            path: '/home',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/classify',
            name: 'ClassifyPage',
            component: ClassifyPage
        },
        {
            path: '/taste',
            name: 'TastePage',
            component: TastePage
        },
        {
            path: '/shoppingCart',
            name: 'ShoppingCartPage',
            component: ShoppingCartPage
        },
        {
            path: '/person',
            name: 'PersonPage',
            component: PersonPage
        }

    ]
});
