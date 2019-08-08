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
      if (this.state.cart.length < 1) {
        this.state.cart.push(payload)
      }

        let itemAlreadyInList;
        this.state.cart.filter(el=>{
        itemAlreadyInList =  el.title !== payload.title

        });
        if(itemAlreadyInList) {
          this.state.cart.push(payload)
        }
     
    },
    toggleCart(state) {
      let defaultValue = this.state.openCart;
      this.state.openCart = !defaultValue
    },
    openCart(state) {
      this.state.openCart = true
    }
  },
  actions: {

  }
})
