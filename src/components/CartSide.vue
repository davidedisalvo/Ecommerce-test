<template>
  <div
    class="cart-side"
    :class="{ open: this.$store.state.openCart }"
    id="cartSide"
  >
    <div class="inner">
      <b-card :key="item.title + index" v-for="(item, index) in getCartItems">
        <img :src="item.img" alt="" />
        <b-card-text>{{ item.title }}</b-card-text>
        <p>{{ item.price }}€</p>
      </b-card>

      <div>
        <p @click="test()">Total price:{{ totalPrice }}</p>
      </div>
    </div>
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
      const total = cart
        .filter(function(obj) {
          return obj;
        })
        .map(function(obj) {
          return obj.price;
        })
        .reduce((a, b) => a + b, 0);
      return total;
    }
  }
};
</script>
<style lang="scss" scoped>
.cart-side {
  position: fixed;
  top: 40px;
  right: 0;
  transform: translateX(300px);
  width: 300px;
  background: black;
  z-index: 9;
  transition: all 1s;
  height: 100vh;

  .card-text {
    color: white;
  }
  p {
    color: white;
  }
}
.inner {
  max-height: 100vh;
  overflow: scroll;
}

.open {
  transform: translateX(0);
}

img {
  width: 80px;
}

.card {
  background: transparent;
}
</style>
