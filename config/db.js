import mongoose from "mongoose"

const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to database successfully `);
    }catch (error){
        console.log(`error in database connection ${error}`);
    }
}
export default connectDB;