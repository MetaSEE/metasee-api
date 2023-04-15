let virtualworld = require('../models/VirtualWorld');

class VirtualWorldCtrl {

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

    let uml = new virtualworld(newdata);
    uml.save((err, newvirtualworld)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(newvirtualworld);
    }); 
  };

  // READ
  static read = (req,res)=>{
    virtualworld
      .find()
      .populate([
        {
          path: 'assets.umlclasses',
          model: 'umlclasses',
        },
        {
          path: 'owner',
          model: 'users',
        },
      ])
      .exec((err,virtualworld)=>{
        err ? res.status(400).send(`${err.message}`) : res.status(200).send(virtualworld);
      });
  };

  static readById = (req,res)=>{
    const {id} = req.params;
    virtualworld
      .findById(id)
      .populate('owner')    
      .exec((err,virtualworld)=>{
        err ? res.status(400).send(`${err.message}`) : res.status(200).send(virtualworld);
      });
  };

  static readByUser = (req,res)=>{
    const user = req.query.user;
    virtualworld
      .find({'owner':user})
      .populate('owner')
      .exec((err,virtualworld)=>{
        err ? res.status(400).send(`${err.message}`) : res.status(200).send(virtualworld);
      });
  }

  // UPDATE
  static updateById = (req,res)=>{
    const {id} = req.params;
    virtualworld.findByIdAndUpdate(id, {$set:req.body}, (err)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(`Virtual World updated successfully!`);
    });
  };

  // DELETE
  static deleteById = (req,res)=>{
    const {id} = req.params;
    virtualworld.findByIdAndDelete(id, (err,virtualworld)=>{
      err ? res.status(500).send(`${err.message}`) : res.status(200).send(`Virtual World deleted successfully!`);
    });
  };

  // ---------------------
}

module.exports = VirtualWorldCtrl;


