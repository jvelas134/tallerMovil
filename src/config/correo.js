import nodemailer from "nodemailer"
import { EMAIL, PASSWORD } from "../../config.js";
import { request, response } from "express";
  export let sendEmail = function(req = request, res = response){

    const { correo } = req.body
    // Definimos el transporter
        var transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: EMAIL, // generated ethereal user
            pass: PASSWORD, // generated ethereal password
          },
        });
    // Definimos el email
    var mailOptions = {
        from: 'gaspitmx2@gmail.com',
        to: correo,
        subject: 'Actividades',
        text: 'Actividades '
    };
    // Enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
            res.send(500, err.message);
        } else {
            console.log("Email sent");
            res.status(200).jsonp(req.body);
        }
    });
    };