import express from "express";
import authRouter from "./auth.routes.js";
import scheduleRouter from "./schedule.routes.js";
import searchRouter from "./search.routes.js";

const router = express.Router();

router.use(authRouter)
router.use(searchRouter)
router.use(scheduleRouter)
export default router;
