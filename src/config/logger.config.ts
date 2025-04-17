import winston from "winston";

const logger = winston.createLogger({

  format : winston.format.combine(
    winston.format.timestamp({ format : "MM-DD-YY HH:mm::ss"}),
    winston.format.json(), // Format the logs message as form of json
     // define a custom print
    winston.format.printf( ({ timestamp , level , message , ...data}) => {
       const output = { timestamp , level , message , data};
       return JSON.stringify(output);
    }) 
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename : "logs/app.log"})
  ]

});
  

export default logger;


// transports -> transports property of the logger object tells where the corresponding logs should go 

// co-relation Id -> corelation Id is a unique Id that is added to every log of a single req.