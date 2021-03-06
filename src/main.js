import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Bar from './components/chartComponets/Bar.vue'
import Pie from './components/chartComponets/Pie.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.component("Bar",Bar);
Vue.component("Pie",Pie);

new Vue({
  render: h => h(App),
}).$mount('#app')
