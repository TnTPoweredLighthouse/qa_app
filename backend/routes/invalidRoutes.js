import express from 'express';

const router = express.Router();

export default () => {
    router.get('/', async (req, res) => {
        res.status(400).send('Invalid request URL')
    })
    return router;
}

