const express = require('express');
const reqDbServices = require('../req_db/services');
const app = express();

app.get('/',reqDbServices.getService);


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