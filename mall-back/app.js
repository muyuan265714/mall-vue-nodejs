const express = require('express');
const app = express();
const apiRouter_v1 = require('./router/api_router_v1');
const config = require('./config');
require('./proxy');

app.use('/api/v1',apiRouter_v1);

app.listen(config.port,()=>{
  console.log("服务器启动成功");
})
