import Express from "express";
import getEventDetailsController from "../Controller/getEventDetailsController.js";

const getEventDetailsRouter=Express.Router();

getEventDetailsRouter.get("",getEventDetailsController);

export default  getEventDetailsRouter;