// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// const bugsnag = require('bugsnag-js')
import bugsnag from 'bugsnag-js'
import bugsnagVue from 'bugsnag-vue'
const bugsnagClient = bugsnag('2356d00da6d31eeccd1ebcf2ef867da3')
bugsnagClient.use(bugsnagVue(Vue))
// console.log(bugsnagClient)
bugsnagClient.notify('hiiiii')

import App from './App'
import router from '@/router'
import store from '@/store'
import { CHECK_AUTH } from '@/store/actions.type'

import ApiService from '@/common/api.service'
import DateFilter from '@/common/date.filter'
import ErrorFilter from '@/common/error.filter'

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.filter('error', ErrorFilter)

ApiService.init()

// Ensure we checked auth before each page load.
router.beforeEach(
  (to, from, next) => {
    return Promise
      .all([store.dispatch(CHECK_AUTH)])
      .then(next)
  },
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// const bugsnagVue = require('bugsnag-vue')
// bugsnagClient.use(bugsnagVue(Vue))
// bugsnagClient.notify('hiiiii')
