<template>
  <div class="filters">
    <div class="filter-list">
      <div class="range">
        <b-form-input id="range-1" @change="filtered()" v-model="price" type="range" min="0" max="90"></b-form-input>
        <div class="">price: {{ price }}€</div>
      </div>

      <b-form-input class="searching" @change="filtered()" id="range-1" v-model="searching" type="text"></b-form-input>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  data() {
    return {
      price: 90,
      searching: ""
    };
  },
  props: ["products"],
  computed: {
    // filteredByPrice() {
    //   let filteredItemsByPrice = this.products.filter(item => {
    //     return item.fields.price < this.el;
    //   });
    //   this.$store.commit("filteredListByPrice", filteredItemsByPrice);
    //   //   this.$store.commit("filteredListBySearch", el);
    // },
    // filteredBySearch() {
    //   let el = this.products.filter(el => {
    //     return el.fields.title
    //       .toLowerCase()
    //       .includes(this.search.toLowerCase());
    //   });
    //   this.$store.commit("filteredListBySearch", el);
    // }
    // filterParams() {
    //   const params = {
    //     price: this.el,
    //     search: this.search
    //   };
    //   this.$store.state("filterByParams", params);
    // }
  },
  methods: {
    filtered() {
      let el = this.products.filter(el => {
        return el.fields.title
          .toLowerCase()
          .includes(this.searching.toLowerCase());
      });
      //if search by price
      if (this.price < 90) {
        let el2 = this.products.filter(el2 => {
          console.log(el2.fields.price, this.price);
          return el2.fields.price < this.price;
        });
        //if search when category is selected
        let el3 = el2.filter(el => {
          return el.fields.title
            .toLowerCase()
            .includes(this.searching.toLowerCase());
        });
        console.log("el3", el3);
        this.$store.commit("filteredList", el3);
      } else {
        console.log(el);
        this.$store.commit("filteredList", el);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#range-1 {
  width: 300px;
}
.filter-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.searching {
  @media only screen and (max-width: 380px) {
    margin-bottom: 30px;
  }
}
</style>



