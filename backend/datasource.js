import mongoose from "mongoose";
import envConfig from './config/environment.js';
import { seed } from "./services/dbSeed.js";

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, USE_HTTPS } = envConfig;
const DB_CONNECTION_STRING = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const DB_CONNECTION_OPTIONS = {
    tls: USE_HTTPS
};

class DataSource {
    async initialize() {
        try {
            console.log('Connecting to DB...');
            await mongoose.connect(DB_CONNECTION_STRING, DB_CONNECTION_OPTIONS);
            await seed();
        } catch (e) {
            console.log('Could not connect to DB, ', e);
        }
        mongoose.connection.on('error', err => {
            console.log("DB connection error occured, ", err);
        });
    }
}
export default new DataSource();
