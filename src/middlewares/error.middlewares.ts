import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/app.error";

export const genericErrorHandler = (err : AppError , req : Request , res : Response , next : NextFunction) =>{

  res.status(err.statusCode).json({
    message : err.message,
    success : false
  });
};

export default genericErrorHandler;