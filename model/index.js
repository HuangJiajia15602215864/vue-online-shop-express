const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

// 通过定义来告诉 mongoose 你需要的数据结构和对应的数据类型
const productSchema = Schema({// 商品
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: { type: ObjectId, ref: 'Manufacturer' }
});

const manufacturerSchema = Schema({// 制造商
  id: ObjectId,
  name: String,
});

// 通过 model 来创建对于的数据模型
const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = { Product, Manufacturer };