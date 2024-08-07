import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db';
import newsRoutes from './Routes/news'
import favoritesRoutes from "./Routes/favorites";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

// routes
app.use('/news', newsRoutes);
app.use('/favorites', favoritesRoutes);