const express = require("express");

const app = new express();

app.use(express.json());

var contador_id = 1;
var data = [{
    id: 1,
    nome: "Guilherme",
    cpf: "99999999999",
    status: true
}];

app.get("/listar", (request, response) => {
    return response.send(data);
});

app.post("/cadastrar", (request, response) => {
    // const nome = request.body.nome;
    // const cpf = request.body.cpf;
    // const status = request.body.status;

    const { nome, cpf, status } = request.body;

    // console.log('DADOS DA PESSOA:');
    // console.log(nome);
    // console.log(cpf);
    // console.log(status);

    if (!cpf) {
        return response.send("O campo CPF é obrigatorio!");
    }

    contador_id++

    data.push({
        id: contador_id,
        nome,
        cpf,
        status
    });

    

    return response.send("Pessoa cadastrada com sucesso!");
});

app.listen(8080, () => {
    console.log("O sevidor está rodando na porta 8080!");
});