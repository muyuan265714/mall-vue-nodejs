const mongoose = require("mongoose");
const goods = require("../models/goods");

exports.goodsList = function({pageNum,pageSize,sort},cb){
  let startNum  = (pageNum-1)*pageSize;
  goods.find().sort({price:sort}).skip(startNum).limit(pageSize).exec(cb);
}
