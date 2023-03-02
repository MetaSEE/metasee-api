let mongoose = require("mongoose");

const umlclassShema = new mongoose.Schema({
  classname: {type:String},
  owner: {type:mongoose.Types.ObjectId, ref:'users', required:true},
  position: {
    x: {type: Number, required:true},
    y: {type: Number, required:true},
    z: {type: Number, required:true}
  },
  rotation:{
    x:{type:Number, required:true},
    y:{type:Number, required:true},
    z:{type:Number, required:true},
  },
  scale:{
    x:{type:Number, required:true},
    y:{type:Number, required:true},
    z:{type:Number, required:true},
  },
  color: {type:String},
});

const umlclass = mongoose.model('umlclasses' , umlclassShema);

module.exports = umlclass;