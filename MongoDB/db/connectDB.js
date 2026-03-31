//Database connection helper function

import mongoose from "mongoose";

//create function to connect to mongodb
const connectDB = async (DATABASE_URL) => {
    try{
        await mongoose.connect(DATABASE_URL); //connect to mongodb
        console.log("Database Connected ...");
    }catch(error){
        console.log(error);
    }
}

export default connectDB; 
