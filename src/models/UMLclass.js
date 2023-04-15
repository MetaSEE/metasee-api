let mongoose = require("mongoose");

const umlclassShema = new mongoose.Schema({
  id: {type:String},
  classname: {type:String},
  owner: {type:mongoose.Types.ObjectId, ref:'users', required:true},
  virtualworld: {type:mongoose.Types.ObjectId, ref:'virtualworlds', required:true},
  position: {
    x: {type: Number},
    y: {type: Number},
    z: {type: Number}
  },
  rotation:{
    x:{type:Number},
    y:{type:Number},
    z:{type:Number},
  },
  scale:{
    x:{type:Number},
    y:{type:Number},
    z:{type:Number},
  },
  color: {type:String},
});

const umlclass = mongoose.model('umlclasses' , umlclassShema);

module.exports = umlclass;