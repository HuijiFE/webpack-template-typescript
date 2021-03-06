// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';

import App from 'src/App.vue';
import store from './store';

Vue.config.productionTip = false;

/* tslint:disable no-unused-expression */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

/* tslint:enable */
