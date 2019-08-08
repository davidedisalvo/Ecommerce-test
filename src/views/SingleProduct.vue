<template>
  <div class="single-product">
    <b-card no-body class="overflow-hidden" style="max-width: 1040px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="getSingleProduct.fields.image.fields.file.url" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              <h1>{{getSingleProduct.fields.title}}</h1>
            </b-card-text>
            <b-card-text>{{getSingleProduct.fields.description}}</b-card-text>
            <b-button href="#" variant="primary">
              <router-link to="/" tag="span">Product details</router-link>
            </b-button>
            <b-button href="#" variant="primary" @click="addToCart()">Buy</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
  import items from "../../data/productData.js";

  export default {
    props: ["id"],
    computed: {
      getSingleProduct() {
        return items[this.$props.id];
      }
    },
    methods: {
      addToCart() {
        const itemInCart = {
          id: this.getSingleProduct.sys.id,
          title: this.getSingleProduct.fields.title,
          img: this.getSingleProduct.fields.image.fields.file.url,
          description: this.getSingleProduct.fields.description,
          price: this.getSingleProduct.fields.price,
          quantity: 1
        };
        this.$store.commit("addToCart", itemInCart);
        this.$router.push({ path: "/" });
      }
    },
    mounted() {
      // console.log(this.$props.id);
      // console.log(items);
      const element = items.filter(el => {
        el;
      });
      // console.log(element);
    }
  };
</script>
<style lang="scss" scoped>
  .card {
    margin: 0 auto;
    margin-top: 200px;
  }
  .btn {
    width: 150px;
    display: block;
    margin: auto;
    margin-bottom: 20px;
  }
</style>


