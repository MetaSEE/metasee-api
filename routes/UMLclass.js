var express = require('express');
var umlclass = require('../src/controller/UMLclass.ctrl');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router
  .post('/umlclass' , umlclass.create)  
  .get('/umlclasses' , umlclass.read)
  .get('/umlclass/user' , umlclass.readByUser)
  .get('/umlclass/vw' , umlclass.readByVirtualWorld)   
  .get('/umlclass/id/:id' , umlclass.readByIdUMLClass) 
  .get('/umlclass/:id' , umlclass.readById)
  .put('/umlclass/id/:id' , umlclass.updateByIdUMLClass) 
  .put('/umlclass/:id' , umlclass.updateById)
  .delete('/umlclass/id/:id' , umlclass.deleteByIdUMLClass)
  .delete('/umlclass/:id' , umlclass.deleteById)

module.exports = router;