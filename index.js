const express = require("express"); // chamada do express
const app = express(); // ativação do express
const port = 8081 // porta habilitada

app.use(express.json()); // express funcional em conjunto com .json

app.get('/', (req, res) => {
    let indexPath = path.join(__dirname, "./estrutura/index.html");
    res.sendFile(indexPath);
  }) // 

    const nome = req.body.exemplo2;   
    const idade = req.body.exemplo1;

    app.listen(8081, () => {
        console.log("Servidor iniciado na porta 8081: http://localhost:8081");
    });