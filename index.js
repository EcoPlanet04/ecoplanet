const express = require("express"); // chamada do express
const app = express(); // ativação do express
const port = 8081 // porta habilitada

app.use(express.json()); // express funcional em conjunto com .json

/* app.get('/', (req, res) => {
    let indexPath = path.join(__dirname, "./estrutura/index.html");
    res.sendFile(indexPath);
  })

    const exemplo1 = req.body.exemplo2;   // chamada de conteúdo na web exemplo, um nome e através da chamada, possibilita o tratamento
    const exemplo2 = req.body.exemplo1; */ //tratar erro, não está referenciando

    app.listen(8081, () => {
        console.log("Servidor iniciado na porta 8081: http://localhost:8081");
    });