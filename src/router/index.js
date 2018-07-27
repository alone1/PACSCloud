import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/demoPages/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Demo
    }
  ]
})
