let users = require('../models/User');

class UserCtrl {

  // CREATE
  static create = (req,res)=>{
    let user = new users(req.body);
    user.save((err)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(`User created successfully!`);
    }); 
  };

  // READ
  static read = (req,res)=>{
    users.find((err,users)=>{
      err ? res.status(400).send(`${err.message}`) : res.status(200).send(users);
    });
  };

  static readById = (req,res)=>{
    const {id} = req.params;
    users.findById(id, (err,users)=>{
      err ? res.status(400).send(`${err.message}`) : res.status(200).send(users);
    });
  };

  // UPDATE
  static updateById = (req,res)=>{
    const {id} = req.params;
    users.findByIdAndUpdate(id, {$set:req.body}, (err)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(`User updated successfully!`);
    });
  };

  // DELETE
  static deleteById = (req,res)=>{
    const {id} = req.params;
    users.findByIdAndDelete(id, (err,users)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(`User deleted successfully!`);
    });
  };  

}

module.exports = UserCtrl;