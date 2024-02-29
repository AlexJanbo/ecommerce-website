const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config');

const mongoURI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

console.log(mongoURI)

const connectDB = async () => {
    try {
        const con = await mongoose.connect(mongoURI);
        console.log(`MongoDB connected successfully`)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB