import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VuePandora from '../index'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VuePandora)
import '../mock/index.ts'
import './index.css'
new Vue({
  render: h => h(App)
}).$mount('#app')
