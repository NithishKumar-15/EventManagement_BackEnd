import { db } from "../DB/dbconnection.js";

const eventsCollections=db.collection(process.env.EVENTSCOLLECTION);

const getEventDetailsController=async(req,res)=>{
    try{
        const data=await eventsCollections.find({},{projection:{_id:0}}).toArray();
        res.send({message:"Success",data});
    }catch(e){
        res.status(500).send({message:"internal server error",e})
  
    }
}

export default getEventDetailsController;
