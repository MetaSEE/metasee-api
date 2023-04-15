let mongoose = require("mongoose");

const virtualworldShema = new mongoose.Schema({
  _id: {type: mongoose.Schema.Types.ObjectId, required: true},
  name: {type:String},
  owner: {type:mongoose.Types.ObjectId, ref:'users', required:true},
  thumb: {type:String},
  hashtag: {type:Array, default:[]},
  environment: {type:String, default:"default"},
  assets: [{
    umlclasses:{type:mongoose.Types.ObjectId, ref:'umlclasses'}
  }],
});

const virtualworld = mongoose.model('virtualworlds' , virtualworldShema);

module.exports = virtualworld;