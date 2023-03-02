let umlclass = require('../models/UMLclass');

class UMLclassCtrl {

  // CRUD ---------------------
  // CREATE 
  static create = (req,res)=>{
    let newdata = {};

    for (let el in req.body) {
      if(el == "position"){
        newdata.position = JSON.parse(req.body[el]);
      }else if(el == "rotation"){
        newdata.rotation = JSON.parse(req.body[el]);
      }else if(el == "scale"){
        newdata.scale = JSON.parse(req.body[el]);
      }else{
        newdata[el] = req.body[el]
      }
    }

    let uml = new umlclass(newdata);
    uml.save((err, newumlclass)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(newumlclass);
    }); 
  };

  // READ
  static read = (req,res)=>{
    umlclass
      .find()
      .populate('owner')
      .exec((err,umlclass)=>{
        err ? res.status(400).send(`${err.message}`) : res.status(200).send(umlclass);
      });
  };

  static readById = (req,res)=>{
    const {id} = req.params;
    umlclass
      .findById(id)
      .populate('owner')    
      .exec((err,umlclass)=>{
        err ? res.status(400).send(`${err.message}`) : res.status(200).send(umlclass);
      });
  };

  static readByUser = (req,res)=>{
    const user = req.query.user;
    umlclass
      .find({'owner':user})
      .populate('owner')
      .exec((err,umlclass)=>{
        err ? res.status(400).send(`${err.message}`) : res.status(200).send(umlclass);
      });
  }

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

  // ---------------------
}

module.exports = UMLclassCtrl;


