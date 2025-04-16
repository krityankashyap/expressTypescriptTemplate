import {NextFunction, Request , Response} from "express";
import fs from "fs";

export const pingHandler =  (req : Request , res : Response , next : NextFunction)  => {

   fs.readFile("sample" , (err , data) => {
    if(err){
        console.log("Error reading file ", err)
        next(err); // Pass the error to the next middleware which is the default error handler
    }

   // console.log(data.toString());
   })
  
    // res.status(200).json({
    //     message : "Pong",
    //     success : true,
    // });
}