const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const color = require("colors");
const app = require("./app");

//Database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(
  () => {
    console.log(`Database Connection is successful`.red.bold);
  },
  (err) => {
    console.log(`Database Connection is Error ${err}`.red.bold);
  }
);
//Server Connection
const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  try {
    console.log(`App is running on port ${port}`.yellow.bold);
  } catch (err) {
    console.log(`Error in server setup`);
  }
});
