const {Client} = require('pg');

const client = new Client ({
    user:'postgres',
    password:'postgres',
    host: 'localhost',
    port:5433,
    database:'Projeto_Final'
});

module.exports = client;
