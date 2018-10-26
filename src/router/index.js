/**
 * Created by saikrishna on 16/10/18.
 */

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import ANG_APP from '@/config/config'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: ANG_APP+'/managers/:projectId/:orderId',
      name:'ang_manager',
    }

  ]
})
