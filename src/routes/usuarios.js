import { Router } from "express";

import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { crearUsuario, getUsuario, getUsuarios } from "../controllers/usuarios.js";

const router = Router();

/**
 * @openapi
 * /api/usuarios/:
 *   post:
 *     tags:
 *       - API USUARIOS
 *     requestBody:
 *         description: Create a new usuarios
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/usuarios'
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
router.post('/', [
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('contraseña', 'La contraseña es obligatorio').not().isEmpty(),
    check('personaId', 'La personaId es obligatorio').not().isEmpty(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    validarCampos], crearUsuario);
/**
 * @openapi
 * /api/usuarios/{id}:
 *   get:
 *     tags:
 *       - API USUARIOS
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id  de la clase usuarios
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
router.get('/:id', getUsuario);
/**
 * @openapi
 * /api/usuarios:
 *   get:
 *     tags:
 *       - API USUARIOS
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
router.get('/', getUsuarios);


export default router;  