/**
 * This our global state for our app.
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
