const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect Successfully to mongoDB ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in mongoDB ${error}`);
    }
}

module.exports = connectDB;