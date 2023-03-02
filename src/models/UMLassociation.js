let mongoose = require('mongoose');

const umlassSchema = new mongoose.Schema({
  umlclass_start:{type:mongoose.Types.ObjectId, ref:'umlclasses'},
  umlclass_end:{type:mongoose.Types.ObjectId, ref:'umlclasses'},
});

const umlassociation = mongoose.model('umlassociations' , umlassSchema);

module.exports = umlassociation;