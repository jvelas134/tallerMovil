import  jwt  from 'jsonwebtoken';
import { SECRETORPRIVATEKEY } from '../../config.js';
export const generarJWT  =  (  id= '' ) => {

    return new Promise( (resolve, reject) => {
  
   
        const payload = { id };

        jwt.sign( payload, SECRETORPRIVATEKEY, {
            expiresIn: '1h'
        }, ( err, token ) => {

            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })

    })
}



