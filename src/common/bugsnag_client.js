import Vue from 'vue'

import bugsnag from 'bugsnag-js'
import bugsnagVue from 'bugsnag-vue'
const bugsnagClient = bugsnag('2356d00da6d31eeccd1ebcf2ef867da3')
bugsnagClient.use(bugsnagVue(Vue))

console.log(bugsnagClient)
bugsnagClient.notify('hiiiii from the client!!!')

export default bugsnagClient
