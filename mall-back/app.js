const express = require("express");
const app = express();

//创建一个假数据
let data = [{"name":"小米手机","price":2999}]

//接受get请求"/api/goods/list"
app.get("/api/goods/list",(req,res)=>{
    res.json(data);
});

//开启服务器
app.listen(80,()=>{
    console.log("服务器已启动");
});