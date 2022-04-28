const User = require("../models/user");
const express = require("express");
const router = express.Router();

// all users
router.get("/", async (req, res) => {
  const users = await User.find().sort("name");
  res.send(users);
});

// add new user
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
  });
  await user.save();

  res.send(user);
});

// edit user
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      username: req.body.username,
    },
    { new: true }
  );

  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  res.send(user);
});

// delete user
router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);

  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  res.send(user);
});

module.exports = router;
