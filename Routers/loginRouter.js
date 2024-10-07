import Express from "express";
import loginController from "../Controller/loginController.js";

const loginRouter=Express.Router();

loginRouter.post("",loginController);

export default loginRouter;