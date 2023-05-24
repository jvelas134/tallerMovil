import { DataTypes } from "sequelize";
import sequelize from "../database/conexion.js";
import { Usuarios } from "./usuarios.js";

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
 *           type: date
 *           example: "2022-12-09"
 *         fecha_fin:
 *            type: date
 *            example: "2022-12-01"
 *         desc:
 *            type: string
 *            example: "string"
 *         usuarioId:
 *            type: integer
 *            example: 0
 *         tipoAgendamientoId:
 *             type: integer
 *             example: 0
 *          estado:
 *             type: integer
 *             example: 0
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
        usuarioId:
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


Usuarios.hasMany(Agendamientos , {
    foreinkey: "usuarioId",
    sourceKey: "id",
  });
Agendamientos.belongsTo(Usuarios, { foreinkey: "usuarioId", targetId: "id" });