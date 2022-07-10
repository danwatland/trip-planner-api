import express from 'express';
import cors from 'cors';
import { getLocations, updateLocation } from './db.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/locations', async (req, res) => {
    try {
        const dbResults = await getLocations();

        res.status(200).json(dbResults.rows);
    } catch (error) {
        console.log(error);
    }
});

app.put('/locations', async (req, res) => {
    try {
        await updateLocation(req.body);

        res.status(200).send();
    } catch (error) {
        console.log(error);
    }
});

app.listen(3001, () => {
    console.log('Server listening at port 3001');
});
