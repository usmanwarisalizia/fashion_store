import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import products from './api/products.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({

    // eslint-disable-next-line no-undef
    origin: process.env.FRONTEND_URL
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/products', (req, res) => {
    res.json(products);
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Backend Server is running on: http://localhost:${port}`);
});

export default app;
