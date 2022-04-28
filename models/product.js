const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 10,
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
  },
  quality: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
  },
  image: {
    type: String,
  },
});

const Product = mongoose.model("Products", ProductSchema);
module.exports = UserModel;
