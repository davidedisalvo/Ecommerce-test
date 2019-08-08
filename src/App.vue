<template>
  <div id="app">
    <div id="nav">
      <Header />
      <CartSide />
    </div>
    <router-view />
    <div id="footer"><Footer /></div>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSide from "./components/CartSide";

export default {
  components: {
    Header,
    Footer,
    CartSide
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
