<template>
  <div class="featured">
    <div class="container fluid"><i class="fas fa-truck"></i><h4 class="mt-3">FREE SHIPPING</h4></div>
    <div class="container fluid"><i class="fas fa-money-check-alt"></i><h4 class="mt-3">SECURE PAYMENT</h4></div>
    <div class="container fluid"><i class="fas fa-undo"></i><h4 class="mt-3">FREE RETURN</h4></div>
    <div class="container fluid"><i class="fas fa-chalkboard-teacher"></i><h4 class="mt-3">LOCAL SUPPORT</h4></div>


  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.featured {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 300px;
  background: #5f5c5a;

  @media only screen and (max-width: 740px) {
  grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 300px 300px;

  }
    @media only screen and (max-width:380px) {
  grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 300px 300px 300px 300px;

  }
}
.container {
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
}
i{
  font-size: 100px;
}
h4 {
  font-weight: bold;
  letter-spacing: 6px
}


.first {
  background: url("../assets/static/images/delivery.jpg");
  background-size: cover;
}
</style>

