let mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  login: {type:String, required:true},
  password: {type:String, required:true},
  email: {type:String, required:true},
  nickname: {type:String, required:true}
});

const users = mongoose.model('users' , userSchema);

module.exports = users;