import { Router } from "express";

import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { crearAgendamiento, editarAgendamiento, getAgendamiento, getAgendamientos } from "../controllers/agendamientos.js";

const router = Router();

/**
 * @openapi
 * /api/agendamientos/:
 *   post:
 *     tags:
 *       - API AGENDAMIENTOS
 *     requestBody:
 *         description: Create a new usuarios
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/agendamientos'
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
router.post('/', crearAgendamiento);
/**
 * @openapi
 * /api/agendamientos/{id}:
 *   get:
 *     tags:
 *       - API AGENDAMIENTOS
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id  de la clase agendamientos
 *         required: true
 *         schema:
 *              type: integer
 *              format: int64    
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
router.get('/:id', getAgendamiento);
/**
 * @openapi
 * /api/agendamientos:
 *   get:
 *     tags:
 *       - API AGENDAMIENTOS
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
router.get('/', getAgendamientos);

router.put('/:id', editarAgendamiento);

export default router;