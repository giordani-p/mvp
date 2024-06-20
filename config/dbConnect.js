const mongoose = require("mongoose");
require("dotenv").config();
require("colors");

const dbConnect = async () => {
  await mongoose
    //.connect(process.env.DB)
    .connect('mongodb://localhost:27017/mvp_edukae')
    .then(() => {
      console.log("Database connected! ".yellow.bold);
    })
    .catch((err) => {
      console.error(`Failed to connect database: ${err}`.red.bold);
    });
};
dbConnect();
