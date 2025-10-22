import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()

const connectionString = process.env.MongoDB

export const connectDB = async () => {
    try {
        await mongoose.connect(connectionString)
        console.log('DB connected')
    }
    catch (error) {
        console.log(error)
    }
   
}



