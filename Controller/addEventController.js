import { db } from "../DB/dbconnection.js";

const eventsCollections=db.collection(process.env.EVENTSCOLLECTION);

const addEventController=async(req,res)=>{
    try{
        const data={
            ...req.body,
            eventPrice:100,
        };
        await eventsCollections.insertOne(data);
        res.send({message:"image added success"});

    }catch(e){
        res.status(500).send({message:"internal server error",e})
    }
}


export default addEventController;
