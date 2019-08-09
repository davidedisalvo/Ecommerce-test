<template>
    <div class="header">
<b-navbar toggleable="lg" fixed="top">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="about">About</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="items">Your items</router-link></b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="right">




          <!-- Using 'button-content' slot -->
 <b-nav-item href="#"><i class="fas fa-shopping-cart" @click="openCart"></i>

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
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    computed: {
      getCartNumber() {
        return this.$store.state.cart.length

      }
    },
    methods: {
      openCart() {
        // const test = document.getElementById('cartSide')
        // test.style.transform = "translateX(0)";
        // console.log(test)
        this.$store.commit('toggleCart')
      }
    }
}
</script>

<style lang="scss" scoped>
.right{
  margin-left: auto;
}

.navbar {
  background: #5f5c5a;
}

.nav-item {
  a {
    color: white;
  }
}

.fas {
  color: white;
}


</style>


