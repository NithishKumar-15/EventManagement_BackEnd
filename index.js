import Express from "express";
import cors from "cors"
import connection from "./DB/dbconnection.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import loginRouter from "./Routers/loginRouter.js";
import registrationRouter from "./Routers/registrationRouter.js";
import addEventRouter from "./Routers/addEventRouter.js";
import getEventDetailsRouter from "./Routers/getEventDetailsRouter.js";
import ticketBookingRouter from "./Routers/ticketBookingRouter.js";


const server=Express();

server.use(cors());

server.use(Express.json());

dotenv.config();

const middleWare=(req,res,next)=>{
    try{
        
        jwt.verify(req.headers.token,process.env.SECREATKEY,(err,verified)=>{
            if(err){
                res.send({message:"Unauthorized"})
            }else{
                next();
            }
        });
        
    }catch(e){
        res.status(500).send({ message: "Internal server error" });
    }
}

server.use("/Login",loginRouter);
server.use("/Registration",registrationRouter);
server.use("/AddEvent",middleWare,addEventRouter);
server.use("/GetEventDetails",middleWare,getEventDetailsRouter);
server.use("/ticketBooking",middleWare,ticketBookingRouter);

await connection();

server.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server listerning in port 4000");
    }
});