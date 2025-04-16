import {NextFunction, Request , Response} from "express";
import fs from "fs/promises";
import { InternalServerError } from "../utils/errors/app.error";

export const pingHandler = async (req : Request , res : Response , next : NextFunction)  => {

    try {
    await fs.readFile("sample");
    res.status(200).json({
        message : "Pong!..",
        sucess : true
    })
} catch(error){
  throw new InternalServerError("Internal serval error");
  }

}

