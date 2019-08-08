import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Store({
  state: {
    cart: [],
    openCart: false
  },
  mutations: {
    addToCart(state, payload) {
      if (state.cart.length < 1) {
        state.cart.push(payload)
      }

      let itemAlreadyInList = state.cart.find(item => {
        return item.title === payload.title
      })
      console.log('itemAlreadyInList', itemAlreadyInList);
      // if the item is not in the list
      if(!itemAlreadyInList) {
        state.cart.push(payload)
      }
    },
    toggleCart(state) {
      state.openCart = !state.openCart
    },
    openCart(state) {
      state.openCart = true
    }
  }
})
