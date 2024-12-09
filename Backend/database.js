import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const db = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
    } catch (error){
        throw error;
    }
};

export default db;