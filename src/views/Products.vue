<template>
  <div class="products">
    <h1 class="title-featured">Featured products</h1>
    <Filters :products="featuredProducts"/>
    <b-container fluid>
      <b-row>
        <b-col col lg="3" v-for="item in $store.state.items">
          <b-card
            v-match-heights="{
    el: ['.card']}"
            :title="item.fields.title"
            :img-src="item.fields.image.fields.file.url"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 item"
          >
            <b-card-text>{{item.fields.description}}</b-card-text>
            <b-card-text>
              <h5>Price: {{item.fields.price}}€</h5>
            </b-card-text>
            <div class="button-group">
              <b-button href="#">
                <router-link :to="`/singleProduct/${item.sys.id}`" tag="span">Details</router-link>
              </b-button>
              <b-button href="#" @click="addToCart(item)">Buy</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import items from "../../data/productData.js";
import Filters from "../components/Filters";
export default {
  components: { Filters },
  data() {
    return {
      featuredProducts: items
    };
  },
  computed: {
    list() {
      return this.featuredProducts;
    }
  },
  methods: {
    addToCart(item) {
      console.log(item);
      const itemInCart = {
        id: item.sys.id,
        title: item.fields.title,
        img: item.fields.image.fields.file.url,
        description: item.fields.description,
        price: item.fields.price,
        quantity: 1
      };
      this.$store.commit("addToCart", itemInCart);
      this.$store.commit("openCart");
    }
  },
  mounted() {
    console.log(this.featuredProducts);
  }
};
</script>
<style lang="scss" scoped>
.products {
  margin-top: 100px;
}

.button-group {
  display: flex;
}

.btn {
  width: 50%;
  margin: 10px;
  background: #646d74;
}
</style>


