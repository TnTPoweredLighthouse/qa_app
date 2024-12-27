import express from 'express';
import apiConfig from '../config/apiConfig.js';

const router = express.Router();

const ENDPOINTS = {
    GET_ALL: `${apiConfig.endpoints.general.path}/`,
    POST_ALL: `${apiConfig.endpoints.general.path}/`,
    PUT_ALL: `${apiConfig.endpoints.general.path}/`,
    DELETE_ALL: `${apiConfig.endpoints.general.path}/`,
};

export default () => {
    router.get(ENDPOINTS.GET_ALL, async (req, res) => {
        res.status(200).send('...endpoint under implementation');
    });
    router.post(ENDPOINTS.POST_ALL, async (req, res) => {
        res.status(200).send('...endpoint under implementation');
    });
    router.put(ENDPOINTS.PUT_ALL, async (req, res) => {
        res.status(200).send('...endpoint under implementation');
    });
    router.delete(ENDPOINTS.DELETE_ALL, async (req, res) => {
        res.status(200).send('...endpoint under implementation');
    });

    return router;
};

