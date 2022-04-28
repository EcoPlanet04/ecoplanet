const express = require("express");
const app = express();
const port = 8081

app.use(express.json());

    const nome = req.body.exemplo2;   
    const idade = req.body.exemplo1;

    app.listen(8081, () => {
        console.log("Servidor iniciado na porta 8081: http://localhost:8081");
    });