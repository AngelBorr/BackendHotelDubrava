import swaggerJSDoc from "swagger-jsdoc"
import __dirname from "../utils/dirname.js"

const swaggerOptions ={
    definition:{
        openapi: '3.0.1',
        info: {
            title: 'Documentacion Backend Hotel Dubrava',
            description: 'API Backend que realizara la guarda de los datos del check In de los pasajeros y recibira los e-mail de la pagina contactos'
        }
    },
    apis:[`${__dirname}/docs/**/*.yaml`]
}

export const specs = swaggerJSDoc(swaggerOptions)