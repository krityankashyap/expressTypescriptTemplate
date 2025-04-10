// This file contains all the basic configuration logics for app server to work
import dotenv from 'dotenv';

type serverconfig = {
  PORT : number
}

function loadenv() {
dotenv.config();
console.log("Environment variables are loaded");
}

loadenv();

export const serverConfig : serverconfig = {
     PORT : Number(process.env.PORT) || 3001
}



