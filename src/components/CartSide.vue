<template>
    <div class="cart-side" :class="{'open' : this.$store.state.openCart}" id="cartSide">
        <div class="inner">
            <router-link  to="/items">
             <b-card
    v-for="item in getCartItems"
    @click='itemClicked()'

    >
    <img :src="item.img" alt="">
      <b-card-text>{{item.title}}</b-card-text>
          <p>Price: {{item.price}}€</p>
      <p>Quantity: {{item.quantity}}</p>

      
    </b-card>
    
            </router-link>
               
    <div class="total-price">        <h4 v-if="this.$store.state.cart.length > 0" @click="test()">Total price:{{totalPrice}}€</h4>
</div>
        </div>

    </div>
</template>
<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
     mixins: [ clickaway ],
    data() {
        return {
        }
    },

    computed: {
        getCartItems() {
            return this.$store.state.cart
        },
        totalPrice() {
            const cart = this.$store.state.cart;
        const quantity = cart.filter(function( obj ) {
    return obj
}).map(function( obj ) {
    console.log(obj.quantity)
    return obj.quantity;
})
const price = cart.filter(function( obj ) {
    return obj
}).map(function( obj ) {
    console.log(obj.price)
    return obj.price;
})
const sum = quantity.reduce(function(r,a,i){return r+a*price[i]},0)

return sum

}
},
methods: {
    itemClicked() {
        console.log('item clicked')
        this.$store.commit('closeCart')
    }
}

}
</script>
<style lang="scss" scoped>
.cart-side {
    position: fixed;
    top: 40px;
    right: 0;
    transform: translateX(300px);
    width: 300px;
    background: #5f5c5a;
    z-index: 9;
    transition: all 1s;
    height: 100vh;

    .card-text {
        color: white;
    }
    p {
        color: white;
    }
}
.inner {
    max-height: 100vh;
    overflow: scroll;
}

.card{
    border: none;
}

.open {
    transform: translateX(0);
}

img {
    width: 80px;
}

.card {
    background: transparent;
}

.total-price {
    border-top: 2px solid white;
}

h4 {
    margin-right: auto;
    text-align: left;
    font-weight: bold;
    padding-left: 15px;
    color: white;
}
</style>


