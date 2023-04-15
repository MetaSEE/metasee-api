var express = require('express');
var virtualworld = require('../src/controller/VirtualWorld.ctrl');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router
  .post('/virtualworld' , virtualworld.create)  
  .get('/virtualworlds' , virtualworld.read)
  .get('/virtualworld/search' , virtualworld.readByUser)
  .get('/virtualworld/:id' , virtualworld.readById)
  .put('/virtualworld/:id' , virtualworld.updateById)
  .delete('/virtualworld/:id' , virtualworld.deleteById)

module.exports = router;