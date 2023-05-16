import { DataTypes } from "sequelize";
import sequelize from "../database/conexion.js";
import { Personas } from "./personas.js";


/**
 * @openapi
 * components:
 *   schemas:
 *     agendamientos:
 *       type: object
 *       properties:
 *         titulo:
 *           type: string
 *           example: "string"
 *         fecha_ini:
 *           type: string
 *           example: "string"
 *         fecha_fin:
 *            type: string
 *            example: "string"
 *         desc:
 *             type: string
 *             example: "string"
 *         personaId:
 *             type: integer
 *             example: 0
 *         tipoAgendamientoId:
 *             type: integer
 *             example: 0
 *         estado:
 *            type: integer
 *            example: 0
 */

export const Agendamientos = sequelize.define("agendamientos",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING
        },
        fecha_ini: {
            type: DataTypes.DATE
        },
        fecha_fin: {
            type: DataTypes.DATE
        },
        desc: {
            type: DataTypes.STRING
        },
        tipoAgendamientoId:{
            type: DataTypes.INTEGER
         },
        personaId:
        {
          type: DataTypes.INTEGER
        },
        estado: {
            type: DataTypes.INTEGER
        }

    },
    {
        timestamps: false,
    }
);


Personas.hasMany(Agendamientos , {
    foreinkey: "personaId",
    sourceKey: "id",
  });
Agendamientos.belongsTo(Personas, { foreinkey: "personaId", targetId: "id" });