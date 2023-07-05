import mongoose from "mongoose";
//we don't need to import dotenv here because it's configured in the main server.js where this function will be executed.

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(`mongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    //have the server exit with a failure
    process.exit(1);
  }
};

export default connectDB;
