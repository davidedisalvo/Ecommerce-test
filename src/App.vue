<template>
  <div id="app">
    <div class="inner">
      <div id="nav">
        <Header/>
        <CartSide/>
      </div>
      <router-view/>
    </div>
    <Footer/>
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


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Oswald", sans-serif;
  background: #eaeaea;
  display: flex;
  flex-direction: column;
}

html,
body {
  height: 100%;
  margin: 0;
}
</style>
