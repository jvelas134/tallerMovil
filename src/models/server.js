import express from "express";
import cors from "cors"
import conection from "../database/conexion.js"

import  {swaggerDocs}  from '../swagger/swagger.js'
import { PORT } from "../../config.js";
import { PORTSWAGGER } from "../../config.js";

import RoutesUsuarios from "../routes/usuarios.js";
import RouterTipoAgendamientos from "../routes/tipo_agendamientos.js"
import RouterAgendamiento from "../routes/agendamientos.js"
import RouterCorreo from "../routes/correo.js"


class Server{
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            personas: '/api/personas',
            agendamientos: '/api/agendamientos',
            tipoagendamientos: '/api/tipoagendamientos',
            correo: '/api/correo'
        };

        this.app = express();
        this.port = PORT
        this.portSwagger = PORTSWAGGER

        // Métodos iniciales
        this.dbConnection();
        this.middlewares(); 
        this.routes();
    }
    async dbConnection() {

        try {
            await conection.authenticate();
            console.log('Database online');
        }
        catch (error) {
            console.log(error);
        }
    }
    middlewares() {
        // CORS
        this.app.use(cors());
        // Lectura del body
        this.app.use(express.json());
    }
    routes() {
        
        this.app.use(this.apiPaths.usuarios, RoutesUsuarios);
        this.app.use(this.apiPaths.tipoagendamientos, RouterTipoAgendamientos);
        this.app.use(this.apiPaths.agendamientos, RouterAgendamiento);
        this.app.use(this.apiPaths.correo, RouterCorreo);

    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
            swaggerDocs(this.app, this.port);
        });
    }
}

export default Server;