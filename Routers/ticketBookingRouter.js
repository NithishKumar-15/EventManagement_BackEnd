import Express from "express";
import ticketBookingController from "../Controller/ticketBookingController.js";

const ticketBookingRouter=Express.Router();

ticketBookingRouter.post("",ticketBookingController);

export default ticketBookingRouter;