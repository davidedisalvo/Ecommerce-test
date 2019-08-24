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
      const x = window.matchMedia("(min-width: 400px)");
      if (x.matches) {
        this.state.openCart = true;
      }
    },
    closeCart() {
      const x = window.matchMedia("(min-width: 400px)");
      if (x.matches) {
        this.state.openCart = false;
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
    filteredList(state, payload) {
      state.items = payload;
    },
    orderListByPriceAscending(state) {
      state.items.sort(function(a, b) {
        return parseFloat(a.fields.price) - parseFloat(b.fields.price);
      });
    },
    orderListByPriceDicending(state) {
      state.items.sort(function(a, b) {
        return parseFloat(b.fields.price) - parseFloat(a.fields.price);
      });
    }
  }
});
