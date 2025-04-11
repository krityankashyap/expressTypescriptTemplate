import express from 'express';
import pingRouter from '../ping';

const v2Router = express.Router();

v2Router.use('/ping' , pingRouter);

export default v2Router;

