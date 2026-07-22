import mongoose from "mongoose"

async function connectionDB(){
    try{
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not configured")
        }

        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected")
    }
    catch(error){
        console.log("Database connection failed")
        console.log(error.message);
        process.exit(1);
    
    }
}  
export default connectionDB; 
