import http from 'http';
import express from 'express';
import cars from './api/cars';
import bodyParser from 'body-parser';

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//to prevent CORS errors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.use('/cars', cars);

const server = http.createServer(app);

server.listen(port);
