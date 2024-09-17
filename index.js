const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node API server update");
});

mongoose
  .connect(
    "mongodb+srv://admin:wxcqZjNmuR1uqAnK@prac.jxtd3.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Prac"
  )
  .then(() => {
    console.log("Connected To database");
    app.listen(3000, () => {
      console.log("Server is running in port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });

//admin
//wxcqZjNmuR1uqAnK
