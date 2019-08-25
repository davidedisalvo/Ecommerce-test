<template>
  <div class="footer-app">
    <div class="left">
      <ul>
        <li>
          <router-link tag="span" to="/">Home</router-link>
        </li>
        <li>
          <router-link tag="span" to="/"></router-link>Products
        </li>
        <li>
          <router-link tag="span" to="/about">About</router-link>
        </li>
        <li>
          <router-link tag="span" to="/items">You Items</router-link>
        </li>
      </ul>
    </div>
    <div class="center">Copyright &copy; Davide Simone Di Salvo</div>
    <div class="right">
      <h4>Follow us</h4>
      <div class="icon-container">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer-app {
  background: #5f5c5a;
  height: 150px;
  display: flex;
  flex-shrink: 0;
  justify-self: flex-end;

  align-content: center;
  justify-content: space-between;
}
.left {
  display: flex;
  align-content: center;
}

.right {
  padding: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  h4 {
    padding: 5px;
    color: white;
    font-weight: bold;
  }
}

.center {
  display: flex;
  align-items: center;
  color: white;
}
.icon-container {
  display: flex;
}

.fab {
  color: white;
  font-size: 20px;
  margin-left: 10px;
}

ul {
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  li {
    cursor: pointer;
    color: white;
  }
}
</style>
