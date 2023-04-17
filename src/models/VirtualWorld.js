let mongoose = require("mongoose");

const virtualworldShema = new mongoose.Schema({
  // _id: {type: mongoose.Schema.Types.ObjectId},
  name: {type:String},
  owner: {type:mongoose.Types.ObjectId, ref:'users', required:true},
  thumb: {type:String, default:"default"},
  hashtag: {type:Array, default:[]},
  environment: {type:String, default:"default"},
  assets: [{
    umlclasses:{type:mongoose.Types.ObjectId, ref:'umlclasses'}
  }],
  createdAt: {type:Date, default:Date.now}
});

const virtualworld = mongoose.model('virtualworlds' , virtualworldShema);

module.exports = virtualworld;