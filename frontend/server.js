const express = require("express");
const app = express();
const PORT = 8081;

app.use('/',express.static('src'));

app.listen(PORT, ()=>{ console.log(`PORT = ${PORT}`)});