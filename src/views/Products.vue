<template>
  <div class="products">
    <h1 class="title-featured">PRODUCTS</h1>
    <Filters :products="featuredProducts"/>

    <b-container fluid>
      <transition-group name="flip-list" tag="div" class="row">
        <b-col col lg="3" v-for="item in $store.state.items" :key="item.sys.id">
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
      </transition-group>
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
      featuredProducts: items,
      selected: undefined
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
      this.selected = item.sys.id;

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
.btn {
  width: 50%;
  margin: 10px;
  background: #646d74;
}

h1 {
  font-weight: bold;
  margin-bottom: 70px;
  letter-spacing: 3px;
}

.card-title {
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
}

.col {
  padding-bottom: 15px;
}

.flip-list-move {
  transition: transform 1s;
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


