const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue')
const fs = require('fs/promises');

const app = express();
app.use(bodyParser.json());

/*
1. Crie uma rota GET /ping
  - Sua rota deve retornar o seguinte JSON: { message: 'pong' }
*/

app.get('/ping', function(_req, res) {
  return res.status(200).json({ message: 'pong' });
});

/* 
2. Crie uma rota POST /hello
  - Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
  - Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
*/
app.post('/hello', function(req, res) {
  const { user } = req.body;

  return res.status(201).json({ message: `Hello, ${user} `});
});

/*
3. Crie uma rota POST /greetings
  - Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
  - Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
  - Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
*/
app.post('/greetings', function(req, res) {
  const { name, age } = req.body;
  if (Number(age) <= 17) {
    return res.status(401).json({ message: "Unauthorized"})
  }
  return res.status(201).json({ message: `Hello, ${name}!`});
});

/*
4. Crie uma rota PUT /users/:name/:age .
  - Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
*/
app.put('/users', function(req, res) {
  const { name, age } = req.params;
  
  return res.json({ message: `Seu nome é ${name} e sua idade é ${age} anos de idade`})
});

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(content => JSON.parse(content));
};

/*
6. Crie um endpoint GET /simpsons
  - O endpoint deve retornar um array com todos os simpsons.
*/
app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await getSimpsons()
  return res.status(200).json({ simpsons })
}));

/*
7. Crie um endpoint GET /simpsons/:id
  - O endpoint deve retornar o personagem com o id informado na URL da requisição.
  - Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .
*/
app.get('/simpsons/:id', rescue(async (req, res) => {
  const simpsons = await getSimpsons();
  const filterById = simpsons.find(({ id }) => req.params.id === id);

  if (!filterById) {
    return res.status(404).json({ message: `Simpson not found`})
  }

  return res.status(200).json(filterbyId)
}));

/*
8. Crie um endpoint POST /simpsons .
  - Este endpoint deve cadastrar novos personagens.
  O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
  - Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
  - Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .
*/

function addSimpson(simpson) {
  return fs.writeFile('./simpsons.json', JSON.stringify(simpson));
}

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();

  if (simpsons.map(({ id }) => id).includes(id)) {
    return res.status(409).json({ message: `id already exists`})
  }

  simpsons.push({ id, name });

  await addSimpson(simpsons)

  res.status(204).end();
}));

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
})
