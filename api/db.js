require('dotenv').config();

const mongoose = require('mongoose');
const dbURL = process.env.MONGO_URL;

const connectDB = async () => {
    try {

        await mongoose.connect(dbURL).then(()=>{
            console.log('Mongoose is connected to MongoDB')
        })

    } catch (err) {
        console.error('Error while connecting to MongoDB', err);
    }
};

module.exports = connectDB;
