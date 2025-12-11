import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import products from './api/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/products', (req, res) => {
    res.json(products);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Backend Server is running on: http://localhost:${port}`);
});

export default app;
