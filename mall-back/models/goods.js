const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const goodsSchema = Schema({
  id:String,
  name:String,
  price:Number,
  imgUrl:String,
  checked:{
    type:Boolean,
    default:false
  },
  goodsNum:{
    type:Boolean,
    default:0
  }
});

module.exports = mongoose.model("goods",goodsSchema);
