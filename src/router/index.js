import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mytest from '@/components/mytest'
import menu_moodle from '../components/menu_moodle'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Mytest',
      component: Mytest
    },
    {
      path: '/menu',
      component: menu_moodle
    }
  ]
})
