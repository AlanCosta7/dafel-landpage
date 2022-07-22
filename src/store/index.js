import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import userApp from './module'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: userApp.state,
    actions: userApp.actions,
    getters: userApp.getters,
    mutations: {
      ...userApp.mutations,
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false,
  })

  return Store
})
