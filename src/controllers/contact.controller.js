import MailingService from '../service/service.mailing.js'

const mailingService = new MailingService

export const addInfoContact = async (req, res) => {
    try {
        const datos = req.body 
        console.log('controler', datos)        
        if(datos){
            const sendInfo = await mailingService.createDataContact(datos)
            if(!sendInfo.error){
                const sendMail = await mailingService.createEmailContact(datos.email)
                console.log('controler - 2', sendMail);
                if(sendMail){
                    //req.logger.info('El mail fue enviado')
                    return res.status(200).send('se realizo exitosamente el envio del Email')
                } 
            }else{
                throw new Error ('Error al enviar los Datos de la pagina Contacto')
            }
            
        }else{
            res.status(400).send(`Usuario no valido para el email: ${datos.email}`)
        }
    } catch (error) {
        return res.status(500).send(`Se produjo un error al que obtener los datos para restaurar la contraseña, ${error.message}`)
    }
    
}