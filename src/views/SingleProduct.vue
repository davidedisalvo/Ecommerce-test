<template>
    <div class="single-product">
        <h1 class="main-title">SINGLE PRODUCT</h1>
        <b-card no-body class="overflow-hidden" style="max-width: 1040px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="getSingleProduct.fields.image.fields.file.url" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
        <b-card-text>
           <h1>{{getSingleProduct.fields.title}}</h1>
          </b-card-text>
          <b-card-text>
           {{getSingleProduct.fields.description}}
          </b-card-text>
          <div class="button-group">
               <b-button href="#" ><router-link to="/" tag="span">Product details</router-link></b-button>
            <b-button href="#"  @click="addToCart()">Buy</b-button>
          </div>
         
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
       
    </div>
</template>
<script>
import items from '../../data/productData.js'

export default {
    props: ['id'],
    computed: {
        getSingleProduct() {
           return items[this.$props.id]
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
            }
            this.$store.commit('addToCart', itemInCart)
            this.$router.push({ path: '/' })

        }
    },
    mounted() {
        console.log(this.$props.id)
        console.log(items)
        const element = items.filter(el => {
                el
            })
             console.log(element)
    }
}
</script>
<style lang="scss" scoped>
.card {
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
}

// .single-product {
//     height: calc(100vh - 150px)
// }

.main-title {
    font-size: 60px;
    font-weight: bold;
    text-transform: uppercase;

    padding: 100px;

}
.btn {
    width: 150px;
    display: block;
    margin: auto;
    margin-bottom: 20px;
}

.row {
    align-items: center;
}

.card-body {
    text-align: left;
}

.button-group {
    display: flex;
    margin-top: 30px;
}
</style>


