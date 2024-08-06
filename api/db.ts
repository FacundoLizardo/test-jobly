import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURL = process.env.MONGO_URL as string;

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(dbURL)
      .then(() => console.log('Mongoose is connected to MongoDB'))
  } catch (error: any) {
    console.error('Error while connecting to MongoDB', error);
  }
};

export default connectDB;
