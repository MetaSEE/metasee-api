let express = require('express');
let router = express.Router();
let umlassociation = require('../src/controller/UMLassociation.ctrl');

router
  .post('/umlassociation' , umlassociation.create)
  .get('/umlassociations' , umlassociation.read)
  .get('/umlassociation/id/:id' , umlassociation.readByIdUMLassociation)
  .get('/umlassociation/search' , umlassociation.readByUMLclass)
  .get('/umlassociation/:id' , umlassociation.readById)
  .put('/umlassociation/:id' , umlassociation.updateById)
  .delete('/umlassociation/id/:id' , umlassociation.deleteByIdUMLassociation)
  .delete('/umlassociation/:id' , umlassociation.deleteById)

module.exports = router;