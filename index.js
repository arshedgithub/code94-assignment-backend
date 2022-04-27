const express = require("express");
const app = express();
const UserModel = require("./models/user");
const cors = require("cors");
const connectDB = require("./config/db");

app.use(express.json());
app.use(cors());

connectDB();

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) return res.json(err);
    else return res.json(result);
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(4000, () => console.log("App is listening on port 4000...."));
