import Express from "express";
import registrationController from "../Controller/registrationController.js";

const registrationRouter=Express.Router();

registrationRouter.post("",registrationController);

export default registrationRouter;