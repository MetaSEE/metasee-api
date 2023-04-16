let mongoose = require('mongoose');

const umlassSchema = new mongoose.Schema({
  id: {type:String},
  umlclass_start:{type:mongoose.Types.ObjectId, ref:'umlclasses'}, //from _id of umlclass
  umlclass_end:{type:mongoose.Types.ObjectId, ref:'umlclasses'}, //from _id of umlclass
  virtualworld:{type:mongoose.Types.ObjectId, ref:'virtualworlds'}, 
});

const umlassociation = mongoose.model('umlassociations' , umlassSchema);

module.exports = umlassociation;