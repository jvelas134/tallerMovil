import { response, request } from "express";
import { Agendamientos } from "../models/agendamiento.js";
import { TipoAgendamientos } from "../models/tipo_agendamiento.js";
import { Usuarios } from "../models/usuarios.js";
import { sendEmail } from "../config/correo.js";

export const getAgendamientos = async (req, res = response) => {

    const agendamientos = await Agendamientos.findAll({include: TipoAgendamientos});

    res.json(agendamientos);
}

export const getAgendamiento = async (req, res = response) => {

    const { id } = req.params;

    const agendamientos = await Agendamientos.findByPk(id);

    if (agendamientos) {
        res.json(agendamientos);
    } else {
        res.status(404).json({
            msg: `No existe un agendamiento con el id ${id}`
        });
    }
}

export const crearAgendamiento = async (req = request, res = response) => {

    const { titulo, fecha_ini, fecha_fin, desc, tipoAgendamientoId, usuarioId, estado } = req.body;

    try {

        const agendamientos = await Agendamientos.create({ titulo, fecha_ini, fecha_fin, desc, tipoAgendamientoId, usuarioId, estado  })
             
        res.json(agendamientos);


    } catch (error) {
         console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const editarAgendamiento = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const agendamientos = await Agendamientos.findByPk(id);
        if (!agendamientos) {
            return res.status(404).json({
                msg: 'No existe un agendamiento con el id ' + id
            });
        }

        await agendamientos.update(body);

        res.json(agendamientos);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

} 