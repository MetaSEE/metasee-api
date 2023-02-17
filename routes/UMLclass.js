var express = require('express');
var umlclass = require('../src/controller/UMLclass.ctrl');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router
  .post('/umlclass' , umlclass.create)  
  .get('/umlclass' , umlclass.read)
  .get('/umlclass/:id' , umlclass.readById)
  .put('/umlclass/:id' , umlclass.updateById)
  .delete('/umlclass/:id' , umlclass.deleteById)

module.exports = router;