<template>
    <div class="featuredProduct">
        <b-container>
  <b-row >
       <b-col col lg="4" v-for="item in list">
        <b-card
    :title="item.fields.title"
    :img-src="item.fields.image.fields.file.url"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 item"
  >
    <b-card-text>
     {{item.fields.description}}
    </b-card-text>
        <b-card-text>
     {{item.fields.price}}€
    </b-card-text>

    <b-button href="#" variant="primary"><router-link :to="`/singleProduct/${item.sys.id}`" tag="span">Product details</router-link></b-button>
    <b-button href="#" variant="primary" @click="addToCart(item)">Buy</b-button>
        </b-card>
  </b-col>
  </b-row>
        </b-container>
  </div>
</template>
<script>
import items from '../../data/productData.js'
export default {
    data() {
        return {
            featuredProducts : items
        }
    },
    computed: {
        list() {
            return this.featuredProducts.slice(0, 6)
        }
    },
    methods: {
        addToCart(item) {
            console.log(item)
            const itemInCart = {
                id: item.sys.id,
                title: item.fields.title,
                img: item.fields.image.fields.file.url,
                description: item.fields.description,
                price: item.fields.price,
                quantity: 1
            }
            this.$store.commit('addToCart', itemInCart)
            this.$store.commit('openCart')

        }
    },
    mounted() {
        console.log(this.featuredProducts)
    }
}
</script>
<style lang="scss" scoped>
.item {
    margin-left: auto !important;
    margin-right: auto !important;
}

.btn {
    width: 50%;
    margin: 10px;
}
</style>

