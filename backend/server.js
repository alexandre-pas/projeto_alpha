const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();

const routeClients = require('./routes/routes_clients');
const routeServices = require('./routes/routes_services');

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:8081'],
    credentials: true
}));

app.use('/clients/',routeClients);
app.use('/services/',routeServices);

app.listen(PORT, ()=>{ console.log(`PORT = ${PORT}`)});