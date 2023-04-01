import {Router} from "express";
import validateSchema from "../middlewares/auth.middlewares.js";
import validateToken from "../middlewares/validateToken.js";
import { appointmentSchema, confirmationSchema } from "../schemas/schedule.schemas.js";
import { confirmaAppoitment, getDoctorsSchedule, getUsersSchedule, insertSchedule, schedule } from "../services/schedule.services.js";

const scheduleRouter = Router()

scheduleRouter.get("/schedule/:doctorsid",validateToken,schedule)
scheduleRouter.post("/appointment",validateToken,validateSchema(appointmentSchema),insertSchedule)
scheduleRouter.get("/appointment/:usersid",validateToken,getUsersSchedule)
scheduleRouter.get("/appointment/doctors/:doctorsid",getDoctorsSchedule)
scheduleRouter.post("/appointment/confirmation",validateSchema(confirmationSchema) ,confirmaAppoitment)


export default scheduleRouter