<template>
  <div class="items">
    <h1>YOUR ITEMS</h1>
    <b-list-group>
      <b-list-group-item
        v-for="item in getCartItems"
        class="d-flex justify-content-between align-items-center"
      >
        <img :src="item.img" alt>

        <b-card-text>
          <h3>{{item.title}}</h3>
        </b-card-text>

        <b-badge variant="primary" pill>Quantity: {{item.quantity}}</b-badge>

        <i class="fas fa-trash-alt" @click="deleteFromCart(item)"></i>
      </b-list-group-item>
    </b-list-group>
    <h3 class="noItem" v-if="this.$store.state.cart.length < 1">You don't have any item in your cart</h3>

    <h4 v-if="this.$store.state.cart.length > 0">Total price: {{totalPrice}}</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    getCartItems() {
      return this.$store.state.cart;
    },
    totalPrice() {
      const cart = this.$store.state.cart;
      const quantity = cart
        .filter(function(obj) {
          return obj;
        })
        .map(function(obj) {
          return obj.quantity;
        });
      const price = cart
        .filter(function(obj) {
          return obj;
        })
        .map(function(obj) {
          return obj.price;
        });
      const sum = quantity.reduce(function(r, a, i) {
        return r + a * price[i];
      }, 0);

      return sum;
    }
  },
  methods: {
    deleteFromCart(item) {
      this.$store.commit("deleteFromCart", item);
    }
  }
};
</script>
<style lang="scss" scoped>
h3 {
  font-weight: bold;
}
img {
  width: 40px;
}
.card-text {
  margin-right: auto;
  margin-left: 10px;
}

.items {
  margin-top: 56px;
}
.list-group-item:first-child,
.list-group-item:last-child {
  border-radius: 0 !important;
}

p {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.fa-trash-alt {
  margin-left: 10px;
  cursor: pointer;
  color: #5f5c5a;
}

h1 {
  font-weight: bold !important;
  padding: 50px;
}
h4 {
  float: right;
  padding: 20px;
  font-weight: bold !important;
}
.noItem {
  height: calc(100vh - 370px);
}
</style>
