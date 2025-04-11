import express, { NextFunction, Request, Response } from 'express';
import { pingHandler } from '../controllers/ping.controller';

const pingRouter = express.Router();

pingRouter.get("/" , pingHandler);


export default pingRouter;