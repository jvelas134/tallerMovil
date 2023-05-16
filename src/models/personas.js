import { DataTypes } from "sequelize";
import sequelize from "../database/conexion.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     personas:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           example: "string"
 *         apellido:
 *           type: string
 *           example: "string"
 *         edad:
 *            type: string
 *            example: "string"
 *         telefono:
 *            type: string
 *            example: "string"
 *        estado:
 *            type: integer
 *            example: 0
 */

export const Personas = sequelize.define("personas",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        edad: {
            type: DataTypes.STRING
        },
        telefono: {
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.INTEGER
        }

    },
    {
        timestamps: false,
    }
);



