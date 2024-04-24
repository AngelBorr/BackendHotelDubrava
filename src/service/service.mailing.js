import { transport } from "../config/mailing-config.js";
import env from '../config/dotenv-config.js'

class MailingService{
    async createEmailCheckIn(email){
        try {          
            const result = await transport.sendMail({
                from: `Hotel Dubrava <${env.mailingUser}>`,
                to: email,
                subject: 'Check In en linea Hotel Dubrava',
                html: 
                `
                <h1>Confirmacion de Check In en linea</h1>
                <br>
                <p>Muchas Gracias por haber realizado el check In en el Hotel Dubrava!
                
                `,                
            })
            if(result){
                return result
            }else{
                throw new Error(`Error al intentar mandar el e-mail automatico para el check In del e-mail: ${email}`);
            }
        } catch (error) {
            throw new Error(`No se puede mandar el email automatico de check In para el e-mail: ${email}, erro: ${error}`);
        }
    }

    async createEmailContact(email){
        try {            
            const result = await transport.sendMail({
                from: `Hotel Dubrava <${env.mailingUser}>`,
                to: email,
                subject: 'Contacto Hotel Dubrava',
                html: 
                `
                <h1>Confirmacion de Contacto</h1>
                <br>
                <p>Desde el Hotel Dubrava agradecemos tu contacto, 
                analizaremos tu solicitud y nos pondremos en contacto. Desde 
                ya Muchas Gracias por haber confiado en Hotel Dubrava!
                
                `,                
            })
            if(result){
                return result
            }else{
                throw new Error(`Error al intentar mandar el e-mail de respuesta automatica para el e-mail de contacto: ${email}`);
            }
        } catch (error) {
            throw new Error(`No se puede mandar el e-mail de respuesta inmediata para contactos con e-mail: ${email}, erro: ${error}`);
        }
    }
    
    async createDataContact(datos){
        try {            
            const result = await transport.sendMail({
                from: `${env.mailingUser}`,
                to: `${env.mailingUser}`,
                subject: `Contacto: ${datos.nombre} ${datos.apellido}`,
                html: 
                `
                <div>
                    <p>from: ${datos.email}</p> 
                    <br>
                    <span><strong>Nombre: ${datos.nombre} ${datos.apellido}</strong></span>
                    <br>
                    <p>Telefono: ${datos.telefono}</p>
                    <br>
                    <h3>Confirmacion de Contacto</h3>
                    <p>
                        ${datos.mensaje}
                    </p>
                </div>
                `,                
            })
            if(result){
                return result
            }else{
                throw new Error(`Error al intentar mandar el e-mail con los datos del mensaje y del usuario con el email: ${datos.email}`);
            }
        } catch (error) {
            throw new Error(`No se puede mandar el e-mail con los datos del mensaje y del usuario con el email: ${datos.email}, erro: ${error}`);
        }
    }  
    
}

export default MailingService