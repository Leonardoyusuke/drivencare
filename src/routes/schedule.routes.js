import {Router} from "express";
import validateSchema from "../middlewares/auth.middlewares.js";
import validateToken from "../middlewares/validateToken.js";
import { appointmentSchema } from "../schemas/schedule.schemas.js";
import { getDoctorsSchedule, getUsersSchedule, insertSchedule, schedule } from "../services/schedule.services.js";

const scheduleRouter = Router()

scheduleRouter.get("/schedule/:doctorsid",validateToken,schedule)
scheduleRouter.post("/appointment",validateToken,validateSchema(appointmentSchema),insertSchedule)
scheduleRouter.get("/appointment/:usersid",validateToken,getUsersSchedule)
scheduleRouter.get("/appointment/doctors/:doctorsid",getDoctorsSchedule)


export default scheduleRouter