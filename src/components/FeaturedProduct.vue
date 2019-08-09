<template>
    <div class="featuredProduct">
        <h1 class="title-featured">Featured products</h1>
        <b-container fluid>
  <b-row >
       <b-col col lg="3" v-for="item in list">
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
     <h5>Price: {{item.fields.price}}€</h5>
    </b-card-text>
    <div class="button-group">
        <b-button href="#" variant="primary"><router-link :to="`/singleProduct/${item.sys.id}`" tag="span">Details</router-link></b-button>
    <b-button href="#" variant="primary" @click="addToCart(item)">Buy</b-button>

    </div>
    
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

.title-featured {
    margin-top: 70px;
    margin-bottom: 30px;
    font-size: 50px;
}

.button-group {
    display: flex;
}

.card-text {
    text-align: left;
}

.card-title {
    text-transform: uppercase;
}
.btn {
    width: 50%;
    margin: 10px;
}

h5 {
    margin-top: 20px;
}
</style>

