<template>
  <div class="featured">
    <b-container>
      <b-row>
        <b-col col lg="12" class="grid">
          <div class="item first"></div>
          <div class="item second"></div>
          <div class="item third"></div>
          <div class="item fourth"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 300px;
}

.item {
  background: red;
}
</style>
