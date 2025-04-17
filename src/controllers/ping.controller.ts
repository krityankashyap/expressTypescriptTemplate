import {NextFunction, Request , Response} from "express";
import fs from "fs/promises";
import { InternalServerError } from "../utils/errors/app.error";
import logger from "../config/logger.config";


export const pingHandler = async (req : Request , res : Response , next : NextFunction)  => {

 logger.info("Ping req received");
 res.status(200).json({
    message : "Pong!.."
 });

};

// step1 to generate corelational_Id :- have some unique Id generator

// step2 to generate corelational_Id :- put the Id in current request