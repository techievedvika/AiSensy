const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
const routes = require('./routes/api')

function connectDB() {
  const url = "mongodb+srv://vedvikatech:testdb@testdb.m5lt9tj.mongodb.net/?retryWrites=true&w=majority";

  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
     
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}

const PORT = 5000;
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
 
connectDB();

app.use('/api',routes);
app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});