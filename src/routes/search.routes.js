import {Router} from "express";
import validateToken from "../middlewares/validateToken.js";
import { searchDoctorByLocalization, searchDoctorByName, searchDoctorBySpecialty } from "../services/search.services.js";


const searchRouter = Router()


searchRouter.get("/searchbyname/:name",validateToken,searchDoctorByName)
searchRouter.get("/searchbyspecialty/:specialty",validateToken,searchDoctorBySpecialty)
searchRouter.get("/searchbylocalization/:localization",validateToken,searchDoctorByLocalization)


export default searchRouter
