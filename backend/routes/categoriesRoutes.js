import express from 'express';
import apiConfig from '../config/apiConfig.js';
import constants from '../config/constants.js';

import { getAllCategories } from '../services/categories.js';

const { UNDER_IMPLEMENTATION } = constants;

const router = express.Router();

const ENDPOINTS = {
    GET_ALL: `${apiConfig.endpoints.categories.path}/`,
    POST_ALL: `${apiConfig.endpoints.categories.path}/`,
    PUT_ALL: `${apiConfig.endpoints.categories.path}/`,
    DELETE_ALL: `${apiConfig.endpoints.categories.path}/`,
};

const defaultResponseBody = {
    data: UNDER_IMPLEMENTATION
};

export default () => {
    // get all the questions
    router.get(ENDPOINTS.GET_ALL, async (req, res) => {
        try {
            const categories = await getAllCategories();
            res.status(200).send({ data: categories });
        } catch (e) {
            res.status(501).send({ error: e });
        }
    });
    router.post(ENDPOINTS.POST_ALL, async (req, res) => {
        res.status(200).send(defaultResponseBody);
    });
    router.put(ENDPOINTS.PUT_ALL, async (req, res) => {
        res.status(200).send(defaultResponseBody);
    });
    router.delete(ENDPOINTS.DELETE_ALL, async (req, res) => {
        res.status(200).send(defaultResponseBody);
    });

    return router;
};
