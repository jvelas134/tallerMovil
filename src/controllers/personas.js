import { response, request } from "express";
import { Personas } from "../models/personas.js";
import { Agendamientos } from "../models/agendamiento.js";
import { TipoAgendamientos } from "../models/tipo_agendamiento.js";


export const getPersonas = async (req, res = response) => {

    const personas = await Personas.findAll({});

    res.json(personas);
}

export const getPersona = async (req, res = response) => {

    const { id } = req.params;

    const personas = await Personas.findByPk(id, { include: Agendamientos
    });

    if (personas) {
        res.json(personas);
    } else {
        res.status(404).json({
            msg: `No existe una persona con el id ${id}`
        });
    }
}

export const crearPersona = async (req = request, res = response) => {

    const { nombre, apellido, edad,telefono, estado } = req.body;

    try {

        const personas = await Personas.create({ nombre, apellido, edad,telefono, estado })

        res.json(personas);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const editarPersona = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const personas = await Personas.findByPk(id);
        if (!personas) {
            return res.status(404).json({
                msg: 'No existe la persona con el id ' + id
            });
        }

        await personas.update(body);

        res.json(personas);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}