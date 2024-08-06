require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const connectDB = require ('./db')

connectDB();

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});