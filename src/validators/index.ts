import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

/**
 * 
 * @param schema - zod schema to validate the req body
 * @returns - Middleware function that validates the req body
 */

export const validateReqBody = (schema : AnyZodObject)  => {
   return async (req : Request , res : Response , next : NextFunction) => {
      try {
        await schema.parseAsync(req.body);
        console.log("Request is validated");
        next();

      } catch (error) {
         res.status(400).json({
         message : "invalid req body",
         success : "false",
         error : {error}
        })
      }
   }
}