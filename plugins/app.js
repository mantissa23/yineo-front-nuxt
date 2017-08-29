import Vue from 'vue'

/**
 * App logic that not belongs to any specific component
 */
export default (context) => {

  // close mobile when new page is loaded
  if (context.isClient) {
    window.onNuxtReady((app) => {
      app.$nuxt.$on('routeChanged', (to, from) => {
        app.$store.commit('setMenuMobileIsOpened', false)
      })
    })
  }

  // access drupalBaseUrl from
  Vue.prototype.drupalBaseUrl = process.env.drupalBaseUrl
}
