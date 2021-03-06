import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import DemoModal from '@/pages/demos/modal'
import DemoListRow from '@/pages/demos/listRow'
import DemoButton from '@/pages/demos/button'
import DemoTabs from '@/pages/demos/tabs'
import DemoAccordion from '@/pages/demos/accordion'
import DemoCalendar from '@/pages/demos/calendar'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Index
  }, {
    path: '/demo',
    component: Index
  }, {
    path: '/demo/modal',
    component: DemoModal
  }, {
    path: '/demo/listRow',
    component: DemoListRow
  }, {
    path: '/demo/button',
    component: DemoButton
  }, {
    path: '/demo/tabs',
    component: DemoTabs
  }, {
    path: '/demo/accordion',
    component: DemoAccordion
  }, {
    path: '/demo/calendar',
    component: DemoCalendar
  }]
})
