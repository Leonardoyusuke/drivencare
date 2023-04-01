import {Router} from "express";
import validateSchema from "../middlewares/auth.middlewares.js";
import validateToken from "../middlewares/validateToken.js";
import { historicSchema } from "../schemas/search.schemas.js";
import { patientHistoric, searchDoctorByLocalization, searchDoctorByName, searchDoctorBySpecialty } from "../services/search.services.js";


const searchRouter = Router()


searchRouter.get("/searchbyname/:name",validateToken,searchDoctorByName)
searchRouter.get("/searchbyspecialty/:specialty",validateToken,searchDoctorBySpecialty)
searchRouter.get("/searchbylocalization/:localization",validateToken,searchDoctorByLocalization)
searchRouter.post("/searchHistoric",validateSchema(historicSchema),patientHistoric)


export default searchRouter
