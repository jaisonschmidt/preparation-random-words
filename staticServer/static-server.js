const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "/public")));

// Rota para testar se o servidor está rodando
app.get("/ping", (req, res) => {
    // res.send("Servidor está rodando!");
    res.json({status: "OK"});
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
