<template>
<div class="items">
    <b-list-group>
  <b-list-group-item  v-for="item in getCartItems" class="d-flex justify-content-between align-items-center">
          <img :src="item.img" alt="">

    <b-card-text><h3>{{item.title}}</h3></b-card-text>
    <p @click="deleteFromCart(item)">Delete item</p>
    <b-badge variant="primary" pill>Quantity: {{item.quantity}}</b-badge>
  </b-list-group-item>
</b-list-group>
<p>Total price: {{totalPrice}}</p>
</div>

</template>
<script>
export default {
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
    return obj.quantity;
})
const price = cart.filter(function( obj ) {
    return obj
}).map(function( obj ) {
    return obj.price;
})
const sum = quantity.reduce(function(r,a,i){return r+a*price[i]},0)

return sum

}
},
methods: {
    deleteFromCart(item) {

        this.$store.commit('deleteFromCart', item)

      
        
    }
}

}
</script>
<style>
img {
    width: 40px;
}
.card-text {
    margin-right: auto;
}

.items {
    margin-top: 100px;
}

p {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}
</style>
