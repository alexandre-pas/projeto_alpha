const {Client} = require('pg');
const express = require('express');
const app = express();



const client = () => { return new Client ({
    user: process.env.USERDB,
    password: process.env.PASSWORDBD,
    host: process.env.HOSTDB,
    port:process.env.PORTDB,
    database: process.env.DATABASE
})};

module.exports = client;
/* let user = "admin'; DROP DATABASE;  --";
let pass = "";
let query = "SELECT * FROM public.clients"

client.connect()
.then(() => console.log("Conectado com o Banco"))
.then(() => client.query(query))
.then( results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end()) */