<template>
  <div id="header">
    <div class="container">
      <img src="../../static/images/logo.png">
      <span class="login">
        <a href="#">Login</a>
        <a href="#"><img src="../../static/images/buyCar.svg" alt=""></a>
      </span>
    </div>
  </div>
</template>


<style scoped>
  #header ul li {
    list-style: none;
  }

  .container{
    width: 80%;
    max-width: 1400px;
  }

  #header {
    font-size: 18px;
    overflow: hidden;
    background-color: #fff;
    height: 70px;
  }

  #header .container {
    width: 80%;
    max-width: 1400px;
  }

  #header .container img {
    height: 70px;
  }

  #header .login {
    float: right;
    line-height: 70px;
  }

  #header .login a {
    margin-left: 10px;
  }

  #header .login a img {
    width: 30px;
    height: 30px;
  }
</style>
