import express from 'express';
import apiConfig from '../config/apiConfig.js';
import constants from '../config/constants.js';

import { getAllQuestionsForCategopry } from '../services/questions.js';

const { UNDER_IMPLEMENTATION } = constants;

const router = express.Router();

const ENDPOINTS = {
    GET_ALL: `${apiConfig.endpoints.questions.path}/`,
    GET_FOR_CATEGORY: `${apiConfig.endpoints.questions.path}/:categoryId`,
    POST_ALL: `${apiConfig.endpoints.questions.path}/`,
    PUT_ALL: `${apiConfig.endpoints.questions.path}/`,
    DELETE_ALL: `${apiConfig.endpoints.questions.path}/`,
};

const defaultResponseBody = {
    data: UNDER_IMPLEMENTATION
};

export default () => {
    // get all the questions
    router.get(ENDPOINTS.GET_ALL, async (req, res) => {
        res.status(200).send(defaultResponseBody);
    });

    router.get(ENDPOINTS.GET_FOR_CATEGORY, async (req, res) => {
        const { categoryId } = req.params;
        const { offset = 0, limit = -1 } = req.query;

        try {
            const questions = await getAllQuestionsForCategopry({ categoryId, offset, limit });
            if (questions) {
                res.status(200).send({ data: questions });
            } else {
                res.status(404).send('Category does not exist');
            }
        } catch (e) {
            res.status(500).send('Error getting questions for the category, ', e.message);
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
