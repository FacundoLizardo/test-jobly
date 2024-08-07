import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db';
import newsRoutes from './Routes/news'
import favoritesRoutes from "./Routes/favorites";
const cors = require("cors")

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

// routes
app.use('/news', newsRoutes);
app.use('/favorites', favoritesRoutes);