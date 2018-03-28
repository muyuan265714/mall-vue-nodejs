const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mall');
const Goods  = require('../models/goods');
mongoose.connection.on('open',()=>{
  console.log("数据库连接成功");
  let good = new Goods({
    id:'003',
    name:'小米笔记本',
    price:3549.00,
    imgUrl:'note.webp'
  });
  good.save((err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("成功");
    }
  });
})
