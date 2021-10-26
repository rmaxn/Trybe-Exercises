// Crie uma array drinks com os seguintes obejtos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function(req, res) {

// Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética.
  const sortDrinks = drinks.sort((a, b) => {
    return a.name.localeCompare(b.name)
    });

  return res.status(200).json({ drinks: sortDrinks })
})


// Modifique o código da nossa rota para que ela receba um terceiro parâmetro através de query string com o atributo minPrice e modifique o filter para trazer apenas os receitas onde o valor da receita seja maior ou igual ao o valor enviado como parâmetro, mantendo os filtros anteriores.
// Implemente uma rota /drinks/search que permita pesquisar pelo atributo name usando query string.

app.get('/drinks/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredDrinks = drinks
    .filter((drink) => drink.name.includes(name) && drink.price <= parseInt(maxPrice));

  return res.status(200).json(filteredDrinks);
});


// Crie uma rota GET /drink/:id para retornar uma bebida pelo id .
app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) {
    return res.status(404).json({ message: 'Drink not found!'})
  };

  return res.status(200).json(drink);
});

// Crie uma rota POST /drinks que permita adicionar novas bebidas através da nossa API.

// Modifique o código acima da rota POST /recipes para que receba e salve a receita com o atributo waitTime .

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!'});
});

// Crie uma rota PUT /drinks/:id que permita editar os atributos de uma bebida.

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));

  if (drinkIndex === -1) {
    return res.status(404).json({ message: "Drink not found!" });
  }

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

// Crie uma rota DELETE /drinks/:id que permita remover uma bebida.
app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinkIndex === -1) {
    return res.status(404).json({ message: 'Drink not found!' });
  }

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});


app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});