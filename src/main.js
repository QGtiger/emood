import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
import VueRouter from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Util from './libs/tools'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/iconfont.css'
import { emoji } from './utils/emoji.js'

Vue.use(ElementUI)//全局使用ElementUI

Vue.use(VueRouter);
Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.emoji = emoji

router.beforeEach((to, from, next)=>{
  iView.LoadingBar.start();
  let isLogin = !!localStorage.token
  console.log(isLogin)
  if (to.path === '/login' || to.path === '/register') {
    Util.title(to.meta.title);
    next()
  } else {
    Util.title(to.meta.title);
    isLogin ? next() : next('/login')
  }
  // Util.title(to.meta.title);
  // next()
})

router.afterEach((to, from, next)=>{
  iView.LoadingBar.finish();
  window.scrollTo(0,0);
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})