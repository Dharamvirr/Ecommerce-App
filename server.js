import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import cors from "cors"
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config(); //if path require then fill path if file is in another folder in our case .env is in root folder
connectDB();
const app=express();


//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use("/",authRoutes);
app.use("/category",categoryRoutes);
app.use("/product",productRoutes);

app.get('/' , (req,res)=>{
    res.send({
        message: "message"
    })    
})
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`app is running on ${port}`)
});