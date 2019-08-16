import Vue from "vue";
import Vuex from "vuex";
import Items from "../data/productData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: Items,
    cart: [],
    openCart: false
  },
  mutations: {
    addToCart(state, payload) {
      let itemAlreadyInList = state.cart.find(item => {
        return item.title === payload.title;
      });
      // if the item is not in the list
      if (!itemAlreadyInList) {
        state.cart.push(payload);
      }

      if (itemAlreadyInList) {
        const index = state.cart.findIndex(
          item => item.title === itemAlreadyInList.title
        );
        state.cart[index].quantity++;
      }
    },
    toggleCart(state) {
      let defaultValue = this.state.openCart;
      this.state.openCart = !defaultValue;
    },
    openCart(state) {
      const x = window.matchMedia("(min-width: 400px)")
      if(x.matches) {
        this.state.openCart = true
      }

    },
    closeCart() {
      const x = window.matchMedia("(min-width: 400px)")
      if(x.matches) {
        this.state.openCart = false
      }
    },

    deleteFromCart(state, payload) {
      let itemAlreadyInList = state.cart.find(item => {
        return item.title === payload.title;
      });
      // if the item is not in the list

      if (itemAlreadyInList) {
        const index = state.cart.findIndex(
          item => item.title === itemAlreadyInList.title
        );
        console.log(state.cart[index].quantity);
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--;
        } else {
          state.cart.splice(index, 1);
        }
      }
    },
    // filteredListByPrice(state, payload) {
    //   console.log(payload);
    //   return (state.items = payload);
    // },
    // filteredListBySearch(state, payload) {
    //   return (state.items = payload);
    // }
    filterByParams(state, payload) {
      // let el = this.state.items.filter(el => {
      //   return el.title.toLowerCase().includes(this.searching.toLowerCase());
      // });
      // //if search by category
      // if (this.planet !== "") {
      //   let el2 = state.items.filter(el2 => {
      //     return el2.title.toLowerCase().includes(this.planet.toLowerCase());
      //   });
      //   //if search when category is selected
      //   let el3 = el2.filter(el => {
      //     return el.title.toLowerCase().includes(this.searching.toLowerCase());
      //   });
      //   return el3;
      // } else {
      //   return el;
      // }
    },
    filteredList(state, payload) {
      state.items = payload;
    }
  }
});
