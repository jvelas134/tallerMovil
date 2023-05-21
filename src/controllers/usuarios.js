import { response, request } from "express";
import { Usuarios } from "../models/usuarios.js";
import { Agendamientos } from "../models/agendamiento.js";


export const getUsuarios = async (req, res = response) => {

    const usuarios = await Usuarios.findAll({include: Agendamientos});

    res.json(usuarios);
}

export const getUsuario = async (req, res = response) => {

    const { id } = req.params;

    const usuarios = await Usuarios.findByPk(id, {include: Agendamientos});

    if (usuarios) {
        res.json(usuarios);
    } else {
        res.status(404).json({
            msg: `No existe un usuarios con el id ${id}`
        });
    }
}

export const crearUsuario = async (req = request, res = response) => {

    const { correo, contraseña, estado } = req.body;

    try {

        const usuarios = await Usuarios.create({ correo, contraseña, estado })

        res.json(usuarios);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const editarCliente = async (req, res = response) => {


}