import  JWT  from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn=async (req,res, next)=>{
    try{
        const decode=JWT.verify( 
            req.headers.authorization,
            process.env.JWT_SECRET
        )
        req.user=decode;
        next();
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error in login ",
            error
        })
    }
}
export const isAdmin=async (req,res,next)=>{
    try{
        const user=await userModel.findById(req.user._id);
        if(!user.role){
            return res.status(401).send({
                success:false,
                message:"unAuthorized Access"
            })
        }
        next()

    }catch(error){
        console.log(error);
        res.status(401).send({
            success:false,
            message:"error in admin middleware",
            error
        })         
    }
}