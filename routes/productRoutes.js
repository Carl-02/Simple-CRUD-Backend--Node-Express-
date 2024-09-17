const express = require("express");
const {
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addProduct,
} = require("../controller/product.controller");
const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.post("/", addProduct);

module.exports = router;
