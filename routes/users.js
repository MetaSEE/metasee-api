var express = require('express');
var router = express.Router();
var users = require('../src/controller/User.ctrl');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router
  .post('/users' , users.create)  
  .get('/users' , users.read)
  .get('/users/:id' , users.readById)
  .put('/users/:id' , users.updateById)
  .delete('/users/:id' , users.deleteById)


module.exports = router;
