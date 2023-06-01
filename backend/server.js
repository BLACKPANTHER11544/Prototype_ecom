import express from "express";
import ConnectDB from "./config/db.js";
import env from "dotenv";
import colors from "colors";
import ProductModel from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorhandler.js";
env.config();

ConnectDB();
const app = express();

const port = process.env.Port || 6000;

app.use("/api/products", ProductModel);

app.get("/", (req, res) => {
  res.send("Listening to API .....");
});
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `listing to port ${port} and Runiing in ${process.env.Node_Env}`.blue
      .underline
  );
});
