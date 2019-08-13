<template>
  <div class="about">
    <div class="banner" :style="{ backgroundImage: `url('${bannerImg}')` }"></div>
    <h1>ABOUT US</h1>
    <div class="container">
      <div class="row">
         <div class="general-container">
           <transition name='fade'>
        <div class="left" :style="{ backgroundImage: `url('${leftImg}')` }"></div>
        </transition>
         <div class="right"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vitae labore asperiores dicta architecto ullam tempore distinctio illum accusamus dignissimos ex harum, aspernatur sed et ea aliquid excepturi hic repellat!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam ratione, consequuntur doloribus omnis ducimus soluta. Iste quod debitis deserunt voluptatem similique quo! Nemo reprehenderit ut inventore quod, magni nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro maxime dolor odit doloribus distinctio iure magni quia quasi deserunt unde, nam similique eaque ipsam fugit sapiente voluptates saepe possimus totam!</p>        
         <b-button href="#">Contact us</b-button>
        
      </div>
        

    </div>
      </div>
    </div>
         <Contact></Contact>

   
   

  </div>
</template>
<script>
import Contact from '../components/ContactUs'
export default {
  data() {
    return {
      leftImg: require("../../src/assets/static/images/banner-3.jpg"),
      bannerImg: require("../../src/assets/static/images/banner-2.jpg")
  }
},
components: {
  Contact
}
}
</script>

<style lang="scss" scoped>
.banner {
  background-size: cover;
  background-repeat: no-repeat;
  height: 700px;
  }
.left {
  width: 50%;
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
}
.right {
  width: 50%;
  padding: 20px;
  text-align: left;
  padding-left: 60px;
}

.general-container {
  display: flex;
  align-items: center;
  margin-bottom: 100px;
}

.btn-secondary {
  margin-top: 20px;
}

h1 {
  font-weight: bold;
}
 .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave{
        /* opacity: 1; */
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }



</style>

