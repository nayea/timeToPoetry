// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import {Pagination} from 'vue-pagination-2';
import VuePaginate from 'vue-paginate';
import VueClipboard from 'vue-clipboard2';
import Three from 'three';
import { focus } from 'vue-focus';
import { AccordionMenu } from 'vue-accordion-menu'

Vue.use(VuePaginate)
Vue.use(VueClipboard)
// Vue.use(VueThreejs)
// import VueAudio from 'vue-audio';

import 'expose-loader?$!expose-loader?jQuery!jquery';



Vue.config.productionTip = false;
Vue.prototype.$http = axios;

export const bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
