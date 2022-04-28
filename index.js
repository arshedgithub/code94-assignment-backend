const express = require("express");
const app = express();
const cors = require("cors");

// connect to the database
const connectDB = require("./config/db");

// import route files
const products = require("./routes/products");
const users = require("./routes/users");

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/products", products);
app.use("/api/users", users);

app.listen(4000, () => console.log("App is listening on port 4000...."));
