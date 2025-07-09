const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function connectToMongoDb(){
    await mongoose.connect(process.env.MONGO_URI);
}

module.exports = connectToMongoDb;