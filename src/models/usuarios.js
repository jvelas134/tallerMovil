import { DataTypes } from "sequelize";
import sequelize from "../database/conexion.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     usuarios:
 *       type: object
 *       properties:
 *         correo:
 *           type: string
 *           example: "string"
 *         contraseña:
 *           type: string
 *           example: "string"
 *         estado:
 *            type: integer
 *            example: 0
 */
export const Usuarios = sequelize.define("usuarios",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        correo: {
            type: DataTypes.STRING
        },
        contraseña: {
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.STRING
        }

    },
    {
        timestamps: false,
    }
);
