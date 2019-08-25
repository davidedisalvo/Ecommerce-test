<template>
  <div class="featuredProduct">
    <h1 class="title-featured">Featured products</h1>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col col lg="3" v-for="item in list">
          <b-card
            v-match-heights="{
    el: ['.item', '.card-title']}"
            :title="item.fields.title"
            :img-src="item.fields.image.fields.file.url"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 item"
            :class="{highlight:item.sys.id == selected}"
          >
            <b-card-text>
              <h5>Price: {{item.fields.price}}€</h5>
            </b-card-text>
            <div class="button-group">
              <b-button href="#">
                <router-link :to="`/singleProduct/${item.sys.id}`" tag="span">Details</router-link>
              </b-button>
              <b-button href="#" @click="addToCart(item)">Buy</b-button>
            </div>
            <i class="fas fa-check-circle"></i>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import items from "../../data/productData.js";
export default {
  data() {
    return {
      featuredProducts: items,
      selected: undefined
    };
  },
  computed: {
    list() {
      return this.featuredProducts.slice(0, 6);
    }
  },
  methods: {
    addToCart(item) {
      const itemInCart = {
        id: item.sys.id,
        title: item.fields.title,
        img: item.fields.image.fields.file.url,
        description: item.fields.description,
        price: item.fields.price,
        quantity: 1
      };
      console.log(event);
      this.selected = item.sys.id;
      this.$store.commit("addToCart", itemInCart);
      this.$store.commit("openCart");
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  margin-left: auto !important;
  margin-right: auto !important;
}

.title-featured {
  margin-top: 70px;
  margin-bottom: 30px;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  @media only screen and (max-width: 400px) {
    font-size: 38px;
  }
}

.choosenItem {
  border: 2px solid greenyellow;
}

.button-group {
  display: flex;
}

.card-text {
  text-align: left;
}

.card-title {
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
  text-align: left;
}
.btn {
  width: 50%;
  margin: 10px;
  background: #646d74;
}
.fa-check-circle {
  opacity: 0;
  position: absolute;
  top: 95%;
  right: 0;
}

.item.highlight {
  .fa-check-circle {
    color: green;
    animation: mymove 1s cubic-bezier(0, 0.66, 0.57, 1.75);
  }
}

h5 {
  margin-top: 20px;
}
.col {
  margin-bottom: 60px;
}

@keyframes mymove {
  0% {
    opacity: 0;
  }

  50% {
    transform: scale(3);
    opacity: 1;
  }

  100% {
    transform: scale(1.5);
  }
}
</style>

