let umlassociation = require('../models/UMLassociation');

class UMLassociationCtrl {

  // CREATE
  static create = (req,res)=>{
    let umlass = new umlassociation(req.body);
    umlass.save((err)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(`UML association created successfully!`) ;
    });
  }

  // READ 
  static read = (req,res)=>{
    umlassociation.find((err,umlass)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(umlass) ;
    });
  }

  static readById = (req,res)=>{
    const {id} = req.params;
    umlassociation.findById(id, (err,umlass)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(umlass) ;
    });
  }

  // UPDATE 
  static updateById = (req,res)=>{
    const {id} = req.params;
    umlassociation.findByIdAndUpdate(id, {$set:req.body},(err)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(`UML association updated successfully!`) ;
    });
  }

  // DELETE
  static deleteById = (req,res)=>{
    const {id} = req.params;
    umlassociation.findByIdAndDelete(id,(err)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(`UML association deleted successfully!`) ;
    });
  }

}

module.exports = UMLassociationCtrl;