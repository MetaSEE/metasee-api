let mongoose = require('mongoose');

const umlassSchema = mongoose.Schema({
  umlclass_start:{type:String},
  umlclass_end:{type:String},
});

const umlassociation = mongoose.model('umlassociations' , umlassSchema);

module.exports = umlassociation;