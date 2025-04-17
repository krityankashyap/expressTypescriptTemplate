import express from 'express';
import { Express } from 'express';
import { serverConfig } from './config';
import v1Router from './routes/v1/index.router';
import v2Router from './routes/v2/index.router';
import { genericErrorHandler } from './middlewares/error.middlewares';
import logger from './config/logger.config';


const app : Express = express();

app.use(express.json());


app.use("/api/v1" , v1Router);
app.use("/api/v2" , v2Router);

/**
 *  Add the error handler middlewares
 */

app.use(genericErrorHandler)

app.listen(serverConfig.PORT , ()=>{

  logger.info(`server is started at port no ${serverConfig.PORT}`);
  logger.info("press control + C to terminate session");
}); 