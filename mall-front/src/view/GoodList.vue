<template>
  <div>
    <components-header/>
    <components-nav :paths="paths"/>
    <div id="filter-nav" class="container">
      <span>商品排序：</span>
      <a href="javascript:void(0)" @click="getGoods()">默认排序</a>
      <a href="javascript:void(0)" @click="rank()">
        价格
        <img src="../../static/images/arr-up.png" v-if="sort">
        <img src="../../static/images/arr-down.png" v-if="!sort">
      </a>
    </div>
    <components-Content @gpg="getPriceGoods" :paths="{priceFilters,goods,axios}"/>
    <components-Footer/>
  </div>
</template>

<style>
  body {
    background-color: #f5f7fc;
  }

  .container {
    width: 1400px;
    max-width: 1400px;
    min-width: 1400px;
  }

  #filter-nav {
    height: 55px;
    background-color: #fff;
    margin: 100px auto 80px;
    text-align: right;
  }

  #filter-nav span {
    line-height: 55px;
  }

  #filter-nav a {
    color: #f40;
  }

  #filter-nav a:last-child {
    transition: all .3s;
    margin-left: 5px;
    color: #666;
  }

  #filter-nav a:last-child:hover {
    color: #f40;
  }

  #filter-nav a img {
    width: 20px;
    position: relative;
    left: -5px;
    top: -2px;
  }
</style>

<script>
  import Header from "../components/Header.vue";
  import Nav from "../components/Nav.vue";
  import Content from "../components/content.vue";
  import Footer from "../components/footer.vue";
  import axios from "../../node_modules/axios/dist/axios.js"
  import '../../node_modules/bootstrap/dist/css/bootstrap.css';

  export default {
    data() {
      return {
        axios,
        paths: [
          {
            path: '/',
            name: '首页'
          },
          {
            path: '/GoodsList',
            name: '商品列表'
          }
        ],
        priceFilters: [
          {
            startPrice: '0.00',
            endPrice: '100.00'
          },
          {
            startPrice: '100.00',
            endPrice: '500.00'
          },
          {
            startPrice: '500.00',
            endPrice: '1000.00'
          },
          {
            startPrice: '1000.00',
            endPrice: '5000.00'
          }
        ],
        sort: true,
        goods: []
      }
    },
    components: {
      'components-header': Header,
      'components-nav': Nav,
      'components-Content': Content,
      'components-Footer': Footer
    },
    methods: {
      getGoods(sort) {
        axios.get('/api/v1/goods/list',{
          params:{
            sort:sort,
            pageSize:20
          }
        }).then(res => {
          this.goods = res.data.data;
        })
      },
      rank() {
        this.sort = !this.sort;
        let sort = this.sort ? 1 : -1;
        this.getGoods(sort)
      },
      getPriceGoods: function (index) {
        let price = {pageName:1,pageSize:20,sort:1};
        let pf = this.priceFilters[index];
        for (let key in pf) {
          price[key] = pf[key];
        }
        if (index === "all") {
          price[0]="all"
        }
        axios.get("/api/v1/get/fliter", {
          params: price,
        }).then((res) => {
          this.goods = res.data;
        });
      },
    },
    mounted() {
      this.getGoods();
    }
  }
</script>
