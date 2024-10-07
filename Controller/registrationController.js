import { db } from "../DB/dbconnection.js";
import bcrypt from "bcrypt"; 

const userCollection=db.collection("Users");

const registrationController=async(req,res)=>{
    try{
        const userExist=await userCollection.findOne({Email:req.body.email});
        
        if(userExist===null){
           const hashedPassword=await bcrypt.hash(req.body.password,15,);

           const data={
            UserName:req.body.userName,
            Email:req.body.email,
            Password:hashedPassword
           }

            await userCollection.insertOne(data);
            res.send({message:"Data added successful"});
        }else{
            res.send({message:"User Already Exist"})
        }

    }catch(e){
        res.status(500).send({message:"internal server error"});
    }
}

export default registrationController;