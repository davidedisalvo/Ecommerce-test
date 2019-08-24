<template>
  <div class="banner">
    <b-jumbotron :style="{ backgroundImage: `url('${bannerImg}')` }" class="jumbotron">
      <div class="header">
        <h1>ECOMMERCE EXAMPLE</h1>
        <b-button href="#">
          <router-link tag="span" to="/products">Go to products</router-link>
        </b-button>
      </div>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerImg: require("../../src/assets/static/images/banner.jpg")
    };
  }
};
</script>
<style lang="scss" scoped>
.jumbotron {
  height: 700px;
  @media only screen and (max-width: 480px) {
    height: 400px;
  }
  background-size: cover;
  border-radius: 0 !important;
  margin-bottom: 0;

  .header {
    float: right;
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px) {
      align-items: center;
    }
    h1 {
      color: white;
      font-size: 50px;
      letter-spacing: 5px;
      font-weight: bold;
      @media only screen and (max-width: 480px) {
        font-size: 40px;
      }
    }
  }
  .btn {
    width: 40%;
  }
}

.btn-secondary {
  background-color: #5f5c5a;
}
</style>
