import mongoose from "mongoose";
import users from "./data/user.js";
import products from "./data/products.js";
import userModel from "./models/user.js";
import productModel from "./models/product.js";
import orderModel from "./models/order.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import color from "colors";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // destrying previous data from all models
    await orderModel.deleteMany();
    await userModel.deleteMany();
    await productModel.deleteMany();

    // inserting the users that we ahve defined in our user.js file in data (seeding the data)
    const createUser = await userModel.insertMany(users);
    // adminUser is the Admin , So that we can populate the user field of Product model with it
    const adminUser = createUser[0]._id;
    // populating the user Field of product Model with Admi
    const sampleProduct = products.map((p) => {
      return { ...p, user: adminUser };
    });
    // inserting the products in the product model
    await productModel.insertMany(sampleProduct);
    console.log(`Data Imported`.green.inverse);
    // exiting the process with success
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse);
    // exiting the porcess with failure
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await orderModel.deleteMany();
    await productModel.deleteMany();
    await userModel.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
