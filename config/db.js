const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo DB connected"))
    .catch((err) => {
      console.error("@ERROR", err.message);
      process.exit(1);
    });
};
module.exports = connectDB;
