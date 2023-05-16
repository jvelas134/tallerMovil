import { Router } from "express";
import { getTipoAgendamientos } from "../controllers/tipo_agendamiento.js";

const router = Router();
/**
 * @openapi
 * /api/tipoagendamientos:
 *   get:
 *     tags:
 *       - API TIPO AGENDAMIENTOS
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get('/', getTipoAgendamientos);

export default router;