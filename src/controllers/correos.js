import {transporter} from "../config/correo.js"
import { response , request } from "express";

export const Correo = async (res = response, req = request) => {
    const { correo, fecha_ini, fecha_fin} = req.body;
    try {

        let info = await transporter.sendMail({
            from: '"Actividades Programadas 👻" <activity@actividades.co>', // sender address
            to: correo, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hola Tienes una actividad programada", // plain text body
            html: "<b>Tienes una activad programada para el dia:"+fecha_ini+" </b>", // html body
            html: "<h1>FECHA INICIO: "+fecha_ini+"</h1>\n"
            + "<h1>FECHA FIN: "+fecha_fin+"</h1>"
          });

          res.json(info)
        
    } catch (error) {
        console.log(error)  
    }
}