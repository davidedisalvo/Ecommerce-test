import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    openCart: false

  },
  mutations: {
    addToCart(state, payload) {
      let itemAlreadyInList = state.cart.find(item => {
        return item.title === payload.title
      })
      // if the item is not in the list
      if(!itemAlreadyInList) {
        state.cart.push(payload)
      }

      if(itemAlreadyInList) {
        const index = state.cart.findIndex(item => item.title === itemAlreadyInList.title);
        state.cart[index].quantity ++
      }
    },
    toggleCart(state) {
      let defaultValue = this.state.openCart;
      this.state.openCart = !defaultValue
    },
    openCart(state) {
      this.state.openCart = true
    },
    deleteFromCart(state, payload) {
      let itemAlreadyInList = state.cart.find(item => {
        return item.title === payload.title
      })
      // if the item is not in the list

      if(itemAlreadyInList) {
        const index = state.cart.findIndex(item => item.title === itemAlreadyInList.title);
        console.log(state.cart[index].quantity)
        if(state.cart[index].quantity > 1) {
          state.cart[index].quantity --
        } else {
          state.cart.splice(index,1)

        }

      }
    }
  },
  
})
