/*global Vue*/

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/index.vue');
// const mixins = require('@/mixins');

import mixins from '@/mixins/index.js';
//全局混入http请求
Vue.mixin(mixins);

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');

