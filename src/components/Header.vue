<template>
  <div class="header">
    <b-navbar toggleable="lg" fixed="top">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="$store.commit('closeCart')" href="#">
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item @click="$store.commit('closeCart')" href="#">
            <router-link to="products">Products</router-link>
          </b-nav-item>
          <b-nav-item @click="$store.commit('closeCart')" href="#">
            <router-link to="about">About</router-link>
          </b-nav-item>
          <b-nav-item @click="$store.commit('closeCart')" href="#">
            <router-link to="items">Your items</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="right">
          <!-- Using 'button-content' slot -->
          <b-nav-item class="icon-item" href="#">
            <i class="fas fa-shopping-cart" @click="openCart">{{getCartNumber}}</i>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  },
  computed: {
    getCartNumber() {
      let arr = this.$store.state.cart;
      let totalLength = this.$store.state.cart.length;
      if (totalLength > 0) {
        const quantity = arr
          .filter(function(obj) {
            return obj;
          })
          .map(function(obj) {
            return obj.quantity;
          });

        const sum = quantity.reduce(function(r, a) {
          return r + a;
        }, 0);

        return sum;
      }

      return this.$store.state.cart.length;
    }
  },
  methods: {
    openCart() {
      this.$store.commit("toggleCart");
    }
  }
};
</script>

<style lang="scss" scoped>
.right {
  margin-left: auto;
}
.navbar-light .navbar-toggler {
  border: none;
}

.navbar {
  background: #5f5c5a;
}

.nav-item {
  a {
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
      text-decoration: none;
      opacity: 0.7;
      transition: all 0.5s;
    }
  }
}

.fas {
  color: white;
}

.fa-shopping-cart:before {
  padding-right: 10px;
}

@media only screen and (max-width: 400px) {
  .icon-item {
    display: none;
  }
}
</style>


