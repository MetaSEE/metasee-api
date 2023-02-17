let mongoose = require("mongoose");

const umlclassShema = mongoose.Schema({
  classname:{type:String},
  owner:{type:String, required:true},
  position:{
    x:{type:Number},
    y:{type:Number},
    z:{type:Number},
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
  color:{type:String},
});

const umlclass = mongoose.model('umlclasses' , umlclassShema);

module.exports = umlclass;