import mongoose from "mongoose";
import envConfig from './config/environment.js'

import seed from "./dbSeed.js"

import User from "./models/user.js"

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, USE_HTTPS } = envConfig;

const DB_CONNECTION_STRING = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

const DB_CONNECTION_OPTIONS = {
    tls: USE_HTTPS
}

class DataSource {
    async initialize() {
        try {
            console.log('Connecting to DB...')
            // console.log({ DB_CONNECTION_STRING, DB_CONNECTION_OPTIONS })
            await mongoose.connect(DB_CONNECTION_STRING, DB_CONNECTION_OPTIONS)
        } catch (e) {
            console.log('Could not connect to DB, ', e)
        }

        mongoose.connection.on('error', err => {
            console.log("DB connection error occured, ", err)
        })

        await seed();


    }
}

export default new DataSource();
export { User };