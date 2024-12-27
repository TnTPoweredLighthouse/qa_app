#!/usr/bin/env node

import http from 'http';
import https from 'https';
import app from '../app.js';
import envConfig from '../config/environment.js';

import datasource from '../datasource.js';

const { SERVICE_PORT, USE_HTTPS } = envConfig;

const httpsOptions = {}; // TODO on later stage;
const server = USE_HTTPS ? https.createServer(httpsOptions, app) : http.createServer(app);


await datasource.initialize();
server.listen(SERVICE_PORT);
server.on('error', (err) => { console.log(err); });
server.on('listening', () => {
    console.log(`Opened server on ${server.address().address}:${server.address().port}`);
});

const gracefullShutdown = async () => {
    server.close(() => {
        app.close();
    });
};

process.on('SIGINT', gracefullShutdown);
process.on('SIGTERM', gracefullShutdown);