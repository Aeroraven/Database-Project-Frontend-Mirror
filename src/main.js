import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ripple from 'vue-ripple-directive';
import animated from 'animate.css'
import Vuetify from './plugins/vuetify'
import vuetify from './plugins/vuetify'
import '@/assets/stylesheet/global.css'

Vue.use(Vuetify)
Vue.use(animated)
Vue.directive('ripple', Ripple);
Vue.config.productionTip = false;

Ripple.color = 'rgba(255, 255, 255, 0.25)';
Ripple.zIndex = 55;

new Vue({
  router,
  store,
  Vuetify,
  vuetify,
  render: h => h(App)
}).$mount('#app')
