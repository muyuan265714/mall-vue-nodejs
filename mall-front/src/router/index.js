//引入Vue和Router并 重定向至/GoodList 使用创建好的GoodList.vue模板
import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '../view/GoodList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/GoodsList'
    },
    {
      path:'/GoodsList',
      component:GoodList
    }
  ]
})
