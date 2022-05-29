require("dotenv").config();
const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("you successeded to connect to DB");
  } catch (error) {
    console.error("DB connection failed => " + error);
  }
};
