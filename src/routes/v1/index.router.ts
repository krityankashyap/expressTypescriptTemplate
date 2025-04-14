import express from 'express';
import pingRouter from '../ping';
import { validateReqBody } from '../../validators';
import { pingSchema } from '../../validators/ping.validator';

const v1Router = express.Router();

v1Router.use('/ping' ,validateReqBody(pingSchema) , pingRouter);

export default v1Router;

