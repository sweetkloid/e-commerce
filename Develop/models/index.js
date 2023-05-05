// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//product belongs to category
Product.belongsTo(Category, {
   //referencing the primary key of category
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

//product is allowed to have multiple categories
Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// this junction connects 2 models together, product belongs to tag and has multiple tags
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag'
});
// tag belongs to product and has many 
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
