const express = require("express");
const router = express.Router();
const goodsCtrl = require("../api/v1/goodsCtrl");
const priceCtrl = require("../api/v1/priceCtrl");



//获取全部商品
router.get('/goods/list',goodsCtrl.goodsList);
//获取价格区间的商品
router.get('/get/fliter',priceCtrl.getFliter);

module.exports = router;
