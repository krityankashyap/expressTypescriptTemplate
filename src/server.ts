import express from 'express';
import { Express } from 'express';
import { serverConfig } from './config';
import pingRouter from './routes/ping';

const app : Express = express();

app.use(pingRouter);

app.listen(serverConfig.PORT , ()=>{

  console.log(`server is started at port no ${serverConfig.PORT}`);
}); 