import { response, request } from "express";
import {TipoAgendamientos} from "../models/tipo_agendamiento.js"

export const getTipoAgendamientos = async (req, res = response) => {

    const TAgendamientos = await TipoAgendamientos.findAll();

    res.json(TAgendamientos);
    
}