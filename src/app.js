import express from 'express';
import displayRoutes from 'express-routemap';
import env from './config/dotenv-config.js';
import mongoose  from 'mongoose';
import swaggerUiExpress from 'swagger-ui-express';
import { specs } from './config/swagger-config.js';
import __dirname from './utils/dirname.js';
import cors from 'cors'
import ContactRouter from './routes/contact.router.js';

const contactRouter  =  new ContactRouter

const  app = express();

const PORT = env.port
const USERMONGO = env.userMongo
const PASSMONGO = env.passMongo
const DBMONGO = env.dbColecction
const DBCLUSTER = env.dbCluster

const urlMongo = `mongodb+srv://${USERMONGO}:${PASSMONGO}@${DBCLUSTER}/${DBMONGO}?retryWrites=true&w=majority`

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.use(cors())

app.use('/apidocs', swaggerUiExpress.serve , swaggerUiExpress.setup(specs))
app.use('/contactMailing', contactRouter.getRouter())

const  httpServer = app.listen(`${PORT}`, () => {
    displayRoutes(app);
    console.log(`HTTP Server is running on port 8080`);
})

mongoose.connect(urlMongo).then(() => console.log('Connected to MongoDB')).catch((error) => {console.log(error)})