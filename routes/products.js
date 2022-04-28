const Product = require("../models/product.js");
const express = require("express");
const router = express.Router();

// all procucts
router.get("/", async (req, res) => {
  const products = await Product.find().sort("name");
  res.send(products);
});

// add new product
router.post("/", async (req, res) => {
  const product = new Product({
    sku: req.body.sku,
    name: req.body.name,
    quality: req.body.quality,
    description: req.body.description,
    image: req.body.image,
  });

  // error handling
  try {
    await product.save();
    res.send(product);
  } catch (err) {
    res.send(err._message);
  }
});

// editing products
router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      sku: req.body.sku,
      name: req.body.name,
      quality: req.body.quality,
      description: req.body.description,
      image: req.body.image,
    },
    { new: true }
  );

  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  res.send(product);
});

// deleting products
router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);

  if (!product)
    return res.status(404).send("The product with the given ID was not found.");

  res.send(product);
});

module.exports = router;
