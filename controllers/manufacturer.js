const Model = require('../model');
// Mongoose 为我们提供的操作数据库的接口
const { Manufacturer } = Model;

const manufacturerController = {
  all(req, res) {
    Manufacturer.find({})
      .exec((err, manfacturers) => res.json(manfacturers))
  },
  byId(req, res) {
    const idParams = req.params.id;

    Manufacturer
      .findOne({ _id: idParams })
      .exec((err, manufacturer) => res.json(manufacturer));
  },
  create(req, res) {
    const requestBody = req.body;
    const newManufacturer = new Manufacturer(requestBody);

    newManufacturer.save((err, saved) => {
      Manufacturer
        .findOne({ _id: newManufacturer._id })
        .exec((err, manfacturer) => res.json(manfacturer))
    })
  },
  update(req, res) {
    const idParams = req.params.id;
    let manufacturer = req.body;

    Manufacturer.updateOne({ _id: idParams }, { ...manufacturer }, (err, updated) => {
      res.json(updated);
    })
  },
  remove(req, res) {
    const idParams = req.params.id;

    Manufacturer.findOne({ _id: idParams }).remove( (err, removed) => res.json(idParams) )
  }
}

module.exports = manufacturerController;