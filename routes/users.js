const { User } = require("../models/user");
const express = require("express");
const router = express.Router();

// all procucts
router.get("/", async (req, res) => {
  const users = await User.find().sort("name");
  res.send(users);
});

// add new product
router.post("/", async (req, res) => {
  const user = new User({
    sku: req.body.sku,
    name: req.body.name,
    quality: req.body.quality,
    description: req.body.description,
    image: req.body.image,
  });
  await user.save();

  res.send(user);
});
