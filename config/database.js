const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
  // Connecting to the database
  // mongoose
  //   .connect(MONGO_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useCreateIndex: true,
  //     useFindAndModify: false,
  //   })
  //   .then(() => {
  //     console.log("Successfully connected to database");
  //   })
  //   .catch((error) => {
  //     console.log("database connection failed. exiting now...");
  //     console.error(error);
  //     process.exit(1);
  //   });
  let db = 'mongodb+srv://Dharmadurai:Dharma@123!@cluster0.t7mif.mongodb.net/learn-backend?retryWrites=true&w=majority'
  mongoose.connect(db, {
      useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
  }, () => {
      console.log('connected successfully')
  })
};

