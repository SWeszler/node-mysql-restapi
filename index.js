import http from 'http';
import express from 'express';
import cars from './api/cars';

const port = process.env.PORT || 3000;
const app = express();

app.use('/cars', cars);

const server = http.createServer(app);

server.listen(port);
