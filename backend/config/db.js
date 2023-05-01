const mongoose = require("mongoose");
//const colors = require("colors");
require("dotenv").config();

const uri =
  "mongodb+srv://qubitphy:74568964@cluster0.15tjupu.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
