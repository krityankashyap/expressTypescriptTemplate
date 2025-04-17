import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import logger from "../config/logger.config";


/**
 * 
 * @param schema - zod schema to validate the req body
 * @returns - Middleware function that validates the req body
 */

export const validateReqBody = (schema : AnyZodObject)  => {
   return async (req : Request , res : Response , next : NextFunction) => {
     
      try {
        logger.info("validating req body" );
        await schema.parseAsync(req.body);
        logger.info("Request is validated");
        next();

      } catch (error) {
         logger.error("Invalid req body");
         res.status(400).json({
         message : "invalid req body",
         success : "false",
         error : {error}
        })
      }
   }
}