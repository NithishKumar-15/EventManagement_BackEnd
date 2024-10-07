import Express from "express";
import addEventController from "../Controller/addEventController.js";

const addEventRouter=Express.Router();

addEventRouter.post("",addEventController);

export default addEventRouter;