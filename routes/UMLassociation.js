let express = require('express');
let router = express.Router();
let umlassociation = require('../src/controller/UMLassociation.ctrl');

router
  .post('/umlassociation' , umlassociation.create)
  .get('/umlassociation' , umlassociation.read)
  .get('/umlassociation/:id' , umlassociation.readById)
  .put('/umlassociation/:id' , umlassociation.updateById)
  .delete('/umlassociation/:id' , umlassociation.deleteById)

module.exports = router;