import express from "express";
const router = express.Router();
import productModel from "../models/product.js";
import AsyncHandler from "express-async-handler";

// method : get
// accesss : public
// route : http://localhost:3000/api/products
// Gets All the products to the home page
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const products = await productModel.find();
    if (products) {
      res.json(products);
    } else res.status(404).json({ message: "No Product Found" });
  })
);

// method : get
// accesss: public
// route : http://localhost:3000/api/products/:id
// gives a single product with the specified ID in the Url
router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Porduct not found");
    }
  })
);

export default router;
