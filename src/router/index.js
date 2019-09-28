import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import label from '@/components/label'
import novel from '@/components/novel'
import deteil from '@/components/deteil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/label',
      name: 'label',
      component: label
    },
    {
      path: '/novel',
      name: 'novel',
      component: novel
    }
    ,
    {
      path: '/deteil',
      name: 'deteil',
      component: deteil
    }
  ]
})
