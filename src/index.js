import 'baseCSS';
import 'themeCSS';
export * from './components';
export * from './layouts';
export * from './assist';

import * as directives from './directives';
import * as filters from './filters';
import * as utils from './utils';
export { directives, filters, utils };

export { install } from '@vusion/utils';

import Vue from 'vue';
Vue.prototype.$env = Vue.prototype.$env || {};
Vue.prototype.$env.VUE_APP_DESIGNER = String(process.env.VUE_APP_DESIGNER) === 'true';

function getAsyncPublicPath () {
    const script = document.querySelector('script[src*="cloud-ui.vusion"]');
    if(!script) return;
    
    const src = script.src;
    const publicPath = src.replace(/\/[^/]+$/, '/');
    __webpack_public_path__ = publicPath;
};
getAsyncPublicPath();
