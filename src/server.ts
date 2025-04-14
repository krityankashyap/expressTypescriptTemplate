import express from 'express';
import { Express } from 'express';
import { serverConfig } from './config';
import v1Router from './routes/v1/index.router';
import v2Router from './routes/v2/index.router';
import { z } from 'zod';

const app : Express = express();

app.use(express.json());


app.use("/api/v1" , v1Router);
app.use("/api/v2" , v2Router);

app.listen(serverConfig.PORT , ()=>{

  console.log(`server is started at port no ${serverConfig.PORT}`);
}); 