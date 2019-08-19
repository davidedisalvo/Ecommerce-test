<template>
  <div class="filters">
    <h1>Filter</h1>
    <div class="filter-list">
      <div class="range">
        <b-form-input id="range-1" v-model="price" type="range" min="0" max="90"></b-form-input>
        <div class="price">Price: {{ price }}€</div>
      </div>

      <b-form-input
        class="searching"
        id="range-1"
        v-model="searching"
        type="text"
        placeholder="Search your item"
      ></b-form-input>
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
    filtered() {
      let el = this.products.filter(el => {
        return el.fields.title
          .toLowerCase()
          .includes(this.searching.toLowerCase());
      });
      //if search by price
      if (this.price < 90) {
        let el2 = this.products.filter(el2 => {
          return el2.fields.price < this.price;
        });
        //if search when category is selected
        let el3 = el2.filter(el => {
          return el.fields.title
            .toLowerCase()
            .includes(this.searching.toLowerCase());
        });
        this.$store.commit("filteredList", el3);
      } else {
        this.$store.commit("filteredList", el);
      }
    }
  },
  watch: {
    filtered(newValue) {}
  }
};
</script>
<style lang="scss" scoped>
.filters {
  margin-bottom: 100px;
  padding: 100px 0;
  background: #5f5c5a;
  position: relative;
}
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

.range {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.price {
  font-weight: bold;
  color: white;
}

.form-control:focus {
  border-color: transparent;
  box-shadow: unset;
}
h1 {
  position: absolute;
  top: 0;
  padding: 20px;
  color: white;
  left: 50%;
  transform: translateX(-50%);
}
</style>



