<template>
  <div class="home">
    <Banner/>
    <Featured/>
    <FeaturedProduct/>
  </div>
</template>

<script>
import items from "../../data/productData.js";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import FeaturedProduct from "../components/FeaturedProduct";
import Footer from "../components/Footer";

// @ is an alias to /src

export default {
  name: "home",
  components: {
    Header,
    Banner,
    Featured,
    FeaturedProduct,
    Footer
  },
  data() {
    return {
      test: items
    };
  },
  mounted() {
    console.log(this.test[0].fields.image.fields.file.url);
  }
};
</script>
