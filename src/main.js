import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ripple from 'vue-ripple-directive';

Vue.directive('ripple', Ripple);
Vue.config.productionTip = false;

Ripple.color = 'rgba(255, 255, 255, 0.25)';
Ripple.zIndex = 55;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
