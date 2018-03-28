<template>
  <div id="content" class="container clearfix">
    <div class="left">
      <dl>
        <dt>PRICE:</dt>
        <dd @click='getPriceGoods("all")' :class='{active:active==="all"}'><a href="#">全部价格</a></dd>
        <dd @click='getPriceGoods(index)' :class='{active:active===index}' v-for="(pf,index) in paths.priceFilters">
          <a href="#">{{pf.startPrice}}-{{pf.endPrice}}</a>
        </dd>
      </dl>
    </div>
    <div class="right">
      <div class="good-list">
        <div class="good" v-for="(good,index) in paths.goods">
          <img :src='"../../static/images/"+good.imgUrl'>
          <div>{{good.name}}</div>
          <div>￥{{good.price}}</div>
          <button type=button class="btn btn-danger btn-block">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .container {
    width: 1400px;
  }

  #content ul, li {
    margin: 0;
    padding: 0;
  }

  #content dt {
    margin-bottom: 30px;
    letter-spacing: .25em;
    font-weight: 700;
  }

  #content dd {
    margin-bottom: 30px;
    font-size: 18px;
  }

  #content .left {
    float: left;
    width: 20%;
    min-width: 250px;
  }

  #content .right {
    float: right;
    width: 80%;
  }

  #content a {
    transition: all .3s;
    color: #666;
    display: block;
  }

  #content dd:hover a, #content .active a {
    text-decoration: none;
    transform: translateX(15px);
    color: orange;
  }

  #content dd:hover, #content .active {
    border-left: 3px solid orange;
  }

  #content .right .good {
    float: left;
    margin-bottom: 20px;
    width: 22%;
    margin-right: 3%;
    background: #fff;
    border: 2px solid #e9e9e9;
    transition: all .3s ease-out;
  }

  #content .right .good:hover {
    border-color: #ee7a23;
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    box-shadow: 0 0 10px #999;
  }

  #content .right .good img {
    width: 100%;
    margin-bottom: 15px;
  }

  #content .right .good button {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  #content .right .good div {
    padding-left: 15px;
    margin-bottom: 15px;

  }

  #content .right .good div:nth-child(3) {
    color: #f00;
    font-weight: 700;
  }
</style>
<script>
  export default {
    props: ['paths'],
    data() {
      return {
        active: 'all'
      }
    },
    methods:{
      getPriceGoods:function(index){
        this.active = index;
        this.$emit("gpg",index);
      }
    }
  }
</script>
