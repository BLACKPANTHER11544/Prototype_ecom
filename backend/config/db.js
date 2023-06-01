import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoDbconfig_string, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `MongoDb is connnected to host ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error : ${error.message}`.red.bold.underline);
    process.exit(1);
  }
};
export default connectDB;
