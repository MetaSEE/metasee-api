let umlassociation = require('../models/UMLassociation');

class UMLassociationCtrl {

  // CREATE
  static create = (req,res)=>{
    let umlass = new umlassociation(req.body);
    umlass.save((err, newumlass)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(newumlass) ;
    });
  }

  // READ 
  static read = (req,res)=>{
    umlassociation
      .find()
      .populate('umlclass_start')
      .populate('umlclass_end')
      .exec((err,umlass)=>{
        err ? res.status(500).send(`${err.message}`) : res.status(200).send(umlass) ;
      });
  }

  static readById = (req,res)=>{
    const {id} = req.params;
    umlassociation
      .findById(id)
      .populate('umlclass_start')
      .populate('umlclass_end')
      .exec((err,umlass)=>{
        err ? res.status(500).send(`${err.message}`) : res.status(200).send(umlass) ;
      });
  }

  static readByUMLclass = (req,res)=>{
    const umlclass_start = req.query.startclass;
    const umlclass_end = req.query.endclass;

    if(umlclass_start){
      umlassociation
      .find({'umlclass_start':umlclass_start})
      .populate('umlclass_start')
      .populate('umlclass_end')
      .exec((err,umlass)=>{
        err ? res.status(500).send(`${err.message}`) : res.status(200).send(umlass) ;
      });
    }

    if(umlclass_end){
      umlassociation
        .find({'umlclass_end':umlclass_end})
        .populate('umlclass_start')
        .populate('umlclass_end')
        .exec((err,umlass)=>{
          err ? res.status(500).send(`${err.message}`) : res.status(200).send(umlass) ;
        });      
    }
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