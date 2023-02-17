let umlclass = require('../models/UMLclass');

class UMLclassCtrl {

  // CRUD
  // CREATE
  static create = (req,res)=>{
    let uml = new umlclass(req.body);
    uml.save((err)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(`UML class created successfully!`);
    }); 
  };

  // READ
  static read = (req,res)=>{
    umlclass.find((err,umlclass)=>{
      err ? res.status(400).send(`${err.message}`) : res.status(200).send(umlclass);
    });
  };

  static readById = (req,res)=>{
    const {id} = req.params;
    umlclass.findById(id, (err,umlclass)=>{
      err ? res.status(400).send(`${err.message}`) : res.status(200).send(umlclass);
    });
  };

  // UPDATE
  static updateById = (req,res)=>{
    const {id} = req.params;
    umlclass.findByIdAndUpdate(id, {$set:req.body}, (err)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(`UML class updated successfully!`);
    });
  };

  // DELETE
  static deleteById = (req,res)=>{
    const {id} = req.params;
    umlclass.findByIdAndDelete(id, (err,umlclass)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(`UML class deleted successfully!`);
    });
  };
  

}

module.exports = UMLclassCtrl;