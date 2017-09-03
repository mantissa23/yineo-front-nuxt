/**
 * Global state of our application.
 * Nuxt.js will automatically add this to Vuex.Store instance
 * @see https://nuxtjs.org/guide/vuex-store
 */
export const state = () => ({
  menuMobileIsOpened: false,
  postsSidebar: []
})

export const mutations = {
  setMenuMobileIsOpened (state, value) {
    state.menuMobileIsOpened = value
  },
  setPostsSidebar (state, value) {
    state.postsSidebar = value
  }
}
