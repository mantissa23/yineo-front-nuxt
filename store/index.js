import Vuex from 'vuex'

/**
 * This our global state for our app.
 */
const createStore = () => new Vuex.Store({
  state: {
    menuMobileIsOpened: false,
    postsSidebar: []
  },
  mutations: {
    setMenuMobileIsOpened (state, value) {
      state.menuMobileIsOpened = value
    },
    setPostsSidebar (state, value) {
      state.postsSidebar = value
    }
  }
})

export default createStore
