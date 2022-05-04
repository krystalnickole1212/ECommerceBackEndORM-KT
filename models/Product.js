// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }, 
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    product_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
      validate:{
        isDecimal: {msg: "It must be a decimal"},
    }, 
    stock: {
      type: DataTypes.Integer, 
      allowNull: false,
      defaultValue: "10",
      validate:{
        isNumeric: {msg: "It must be a number"},

    },
    category_id: {
      type: DataTypes.INTEGER,
      
      //this is a reference to another model
      model: category,
      key: id
    } 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
