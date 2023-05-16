import { Router } from "express";
import { sendEmail } from "../config/correo.js";

const router = Router();

router.post('/', sendEmail);

export default router;  