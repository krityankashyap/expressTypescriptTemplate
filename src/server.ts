import express from 'express';
import { Express } from 'express';

const app : Express = express();

const PORT : number = 3000;

app.get("/ping" , (req , res)=>{
  res.send("pong");
})

app.listen(PORT , ()=>{

  console.log(`server is started at port no ${PORT}`);
})