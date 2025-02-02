import express from 'express';
import constants from '../config/constants.js';

const { INVALID_ROUTE } = constants;

const router = express.Router();

export default () => {
    router.get('/', async (req, res) => {
        res.status(400).send(INVALID_ROUTE);
    });
    return router;
};

