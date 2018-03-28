const goodsProxy = require('../../proxy').goodsProxy;

exports.goodsList = function(req,res,next){
  let {pageNum=1,pageSize=10,sort=1} = req.query;
  goodsProxy.goodsList({
    pageNum:pageNum/1,
    pageSize:pageSize/1,
    sort:sort/1
  },(err,doc)=>{
    if(err){
      res.json({
        code:"0",
        msg:err
      })
    }else{
      res.json({
        code:"1",
        msg:"",
        data:doc,
        count:doc.length
      })
    }
  })
}
