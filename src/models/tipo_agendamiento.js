import { DataTypes } from "sequelize";
import sequelize from "../database/conexion.js";
import { Agendamientos } from "./agendamiento.js";

export const TipoAgendamientos = sequelize.define("tipo_agendamientos",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
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

TipoAgendamientos.hasMany(Agendamientos , {
    foreinkey: "tipoAgendamientoId",
    sourceKey: "id",
  });
  Agendamientos.belongsTo(TipoAgendamientos, { foreinkey: "tipoAgendamientoId", targetId: "id" });