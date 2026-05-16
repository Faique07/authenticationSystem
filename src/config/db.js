import config from "./config.js";
import mongoose from "mongoose";

async function connectDB() {
    await mongoose.connect(config.MONGODB_URI);

    console.log("Connected to DB")
}

export default connectDB;