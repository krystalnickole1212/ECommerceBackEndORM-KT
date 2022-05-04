// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
class Product extends Model {
  static associate({Category}) {
    // define association here
    this.belongsTo(Category, {foreignKey: 'category_id', as: 'category' })
  }
};
// Categories have many Products
class Category extends Model {
  static associate({Product}) {
    // define association here
    this.hasMany(Product, {foreignKey: 'category_id', as: 'products' })
  }
};
// Products belongToMany Tags (through ProductTag)
class Product extends Model {
  static associate({Tags}) {
    // define association here
    this.belongsTo(Category, { through: ProductTag })
  }
};

// Tags belongToMany Products (through ProductTag)
class Tag extends Model {
  static associate({Product}) {
    // define association here
    this.hasMany(Product, {foreignKey: 'category_id', as: 'products' })
  }
};

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
