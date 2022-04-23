const express = require('express');
const reqDbClients = require('../req_db/clients');
const app = express();

app.get('/all',reqDbClients.getAll);
app.get('/login',reqDbClients.getLogin);
//app.put('register',reqDbClients.getRegister)
app.post('/', reqDbClients.postClient);


module.exports =   app;

/* async function fetchName(_name){
    const name = _name;
    let obj;
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        obj = res.json();
    } catch (error) {
        console.log("algo certo não está errado, sqn")
    }
    return obj;
} */