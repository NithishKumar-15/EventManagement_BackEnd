import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url="mongodb://localhost:27017";

const client=new MongoClient(process.env.DBCLUSTER);

const db=client.db(process.env.DBNAME);

const connection=async()=>{
    try{
        await client.connect();
        console.log("Connection successful")
    }catch(e){
        console.log("db connection failed");
        process.exit(1);
    }
}

export default connection;
export {db};