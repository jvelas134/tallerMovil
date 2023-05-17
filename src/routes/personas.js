import { Router } from "express";

import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { crearPersona,editarPersona,getPersona,getPersonas } from "../controllers/personas.js";

const router = Router();

/**
 * @openapi
 * /api/personas/:
 *   post:
 *     tags:
 *       - API PERSONAS
 *     requestBody:
 *         description: Create a new usuarios
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/personas'
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
router.post('/', crearPersona);
/**
 * @openapi
 * /api/personas/{id}:
 *   get:
 *     tags:
 *       - API PERSONAS
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id  de la clase personas
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
router.get('/:id', getPersona);
/**
 * @openapi
 * /api/personas:
 *   get:
 *     tags:
 *       - API PERSONAS
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
router.get('/', getPersonas);

router.put('/:id', editarPersona);

export default router;