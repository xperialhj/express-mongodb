var mongoose=require("../mongodb");

var userSchema = new mongoose.Schema({
    "id":Number,
    "userName":String,
    "userAge":Number,
    "userSex":Number,
    "userNation":String,
    "userCard":String,
    "userPhone":Number,
    "userVoc":String      
});

var u = mongoose.model('user', userSchema);
 
module.exports=u;