const goodsProxy = require("../../proxy").goodsProxy;

exports.getFliter = function (req, res) {
  let backDoc = [];
  let {pageNum = 1, pageSize = 10, sort = 1} = req.query;
  goodsProxy.goodsList({
    pageNum: pageNum / 1,
    pageSize: pageSize / 1,
    sort: sort / 1,
  }, (err, doc) => {
    if (err) {
      res.json({
        code: "0001",
        msg: err
      })
    } else {
      if (req.query[0] === "all") {
        res.json(doc)
      } else {
        for (let i = 0; i < doc.length; i++) {
          if (doc[i].price > req.query.startPrice && doc[i].price < req.query.endPrice) {
            backDoc.push(doc[i]);
          }
        }
        res.json(backDoc);
      }
    }
  })
}
