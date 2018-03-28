const config = require("../config");
const mongoose = require("mongoose");
const goodsProxy = require("./goodsProxy");

mongoose.connect(config.db,{
  poolSize:20
})

mongoose.connection.on('open',()=>{
  console.log("数据库连接成功");
});

exports.goodsProxy = goodsProxy;
