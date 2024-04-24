import MyOwnRouter from './router.js';
import { addInfoContact } from "../controllers/contact.controller.js";

export default class ContactRouter extends MyOwnRouter{
    init(){
        this.post('/', /* ['USER', 'PREMIUM'] ,*/ addInfoContact );
        
    }
}