var express = require('express');
var router = express.Router();

var users=require("../modules/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//获取所有人员信息
router.get("/list",function(req, res, next){
     users.find({},function(err,data){
       res.json(data);
     })
});
//新增人员信息  
router.get("/add",function(req, res, next){
    users.create({
      "id":req.query.id,
      "userName":req.query.userName,
      "userAge":req.query.userAge,
      "userSex":req.query.userSex,
      "userNation":req.query.userNation,
      "userCard":req.query.Card,
      "userPhone":req.query.userPhone,
      "userVoc":req.query.userVoc     
  }, function(err, docs) {
      console.log("create ok")
    })
});
//删除人员信息
router.get("/delete",function(req, res, next){
  users.findOne({"id": req.query.id}, function(err, docs) { // 查找我们的1条数据
    // 找到的数据是 docs
    docs.remove(function(err) {        // 删除记录
      if (err) {
        console.log("删除失败");
        return ;
      }
      console.log("删除成功")
    })
  })
});
//修改人员信息
router.get("/update",function(req, res, next){
  users.findOne({"id": req.query.id}, function(err, docs) { // 查找我们的1条数据
    docs.userName=req.query.userName; 
    docs.userAge=req.query.userAge; 
    docs.userSex=req.query.userSex;  
    docs.userNation=req.query.userNation;  
    docs.userCard=req.query.Card;  
    docs.userPhone=req.query.userPhone;  
    docs.userVoc=req.query.userVoc;  
    docs.save(function() {
      console.log("修改成功");
    })
  })
});
//搜索人员信息
router.get("/search",function(req, res, next){
  if(req.query.userName){
    users.find({"userName": req.query.userName}, function(err, docs) {
      res.json(docs);
    })
  }else if(req.query.userAge){
    users.find({"userAge": req.query.userAge}, function(err, docs) {
      res.json(docs);
    })
  }else if(req.query.userSex){
    users.find({"userSex": req.query.userSex}, function(err, docs) {
      res.json(docs);
    })
  }
});
module.exports = router;
