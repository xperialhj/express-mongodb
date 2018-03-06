var mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/info_manage');

module.exports=mongoose;