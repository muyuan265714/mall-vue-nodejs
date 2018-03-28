<template>
  <div id="nav">
    <ul class="container">
      <li v-for="(path,index) in paths">
        <template v-if="index===paths.length-1">
          {{path.name}}
        </template>
        <template v-else>
          <router-link :to="path.path">{{path.name}}</router-link>
        </template>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  a:hover{
    text-decoration: none;
  }
  .container{
    width: 80%;
    max-width: 1400px;
  }
  #nav{padding-left: 28px;
    height: 45px;
    font-size: 16px;
    background-color: #f0f0f0;
  }
  #nav ul{
    margin-bottom: 0;
  }
  #nav ul li{
    list-style: none;
  }
  #nav ul li{
    float: left;
    color:#c00;

    line-height: 45px;
  }
  #nav ul li::after{
    content:"/";
    padding:0 8px;
    color:#666;
  }
  #nav ul li:last-child::after{
    content:"";
  }
</style>
<script>
  export default {
    props:['paths']
  }
</script>
