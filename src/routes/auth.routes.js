import {Router} from "express";
import { signInSchema, singUpDoctorSchema, singUpSchema } from "../schemas/auth.schemas.js";
import validateSchema from "../middlewares/auth.middlewares.js";
import { signin, signinDoctors, signup, signupdoctors } from "../services/auth.services.js";

const authRouter = Router()


authRouter.post("/signup",validateSchema(singUpSchema),signup)
authRouter.post("/signin",validateSchema(signInSchema),signin)
authRouter.post("/signupdoctors",validateSchema(singUpDoctorSchema),signupdoctors)
authRouter.post("/signindoctors",validateSchema(signInSchema),signinDoctors)

export default authRouter
