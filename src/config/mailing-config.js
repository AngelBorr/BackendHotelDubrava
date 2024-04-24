import jwt from 'jsonwebtoken';
import env from  './dotenv-config.js';
import nodemailer from 'nodemailer'

const PRIVATE_KEY = env.keyPrivate

export const generateTokenForEmail = (email) => {
    const token = jwt.sign({email}, `${PRIVATE_KEY}`, {expiresIn: '1h'})
    return token
}

const mailConfig = {
    service: env.mailingService,
    port: env.mailingPort,
    auth: {
        user: env.mailingUser,
        pass: env.mailingPass,
    },
    tls: {
        rejectUnauthorized: false
    }
}

export const transport = nodemailer.createTransport(mailConfig);